const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const request = require("request");
const saltRounds = 10;
require("dotenv").config();
const { Storage } = require("@google-cloud/storage");

const secret = process.env.AUTH_SECRET;
const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID;

const storage = new Storage({
  projectId: FIREBASE_PROJECT_ID,
  keyFilename: "./keyfile.json"
});

const bucket = storage.bucket("deckbuilder-1531369409076.appspot.com");

module.exports = router => {
  let Response = function(success, message, body) {
    return {
      success: success,
      message: message,
      body: body
    };
  };

  let verifyToken = token => {
    console.log("Verifying token");
    return new Promise((resolve, reject) => {
      jwt.verify(token, secret, (err, decoded) => {
        if (err) console.log(err);
        if (!decoded) reject(Error("Invalid token"));
        console.log(decoded);
        resolve(decoded);
      });
    });
  };

  router.post("/new-account", (req, res) => {
    console.log("Client requests to create new account");
    // Client requests to create new user account
    let first = req.body.first;
    let last = req.body.last;
    let username = req.body.username;
    let email = req.body.email;

    // Check for existing user by username
    User.findOne({ username: username })
      .exec()
      .then(user => {
        if (user) {
          console.log("This username is already in use.");
          res.json(new Response(false, "This username is unavailable."));
          throw new Error("End promise chain");
        }
        return User.findOne({ email: email });
      })
      // Check for existing user by email
      .then(user => {
        if (user) {
          console.log("This email address has been used to create an account.");
          res.json(
            new Response(
              false,
              "This email address has already been used to create an account."
            )
          );
          throw new Error("End promise chain");
        }
        console.log("Hashing password");
        return bcrypt.hash(req.body.password, saltRounds);
      })
      // Passed checks, hash password and save new user to DB
      .then(hash => {
        let newUser = new User({
          first: first,
          last: last,
          username: username,
          email: email,
          password: hash,
          projects: []
        });
        return newUser.save();
      })
      .then(user => {
        if (!user) {
          console.log("There was an error saving user to database.");
          res.json(
            new Response(false, "Registration unsuccessful. Please try again.")
          );
          throw new Error("End promise chain");
        }
        console.log("Registration successful");
        let payload = {
          username: username
        };
        return res.json(
          new Response(
            true,
            "Registration successful",
            jwt.sign(payload, secret, { expiresIn: "3h" })
          )
        );
      })
      .catch(error => {
        console.log(error.message);
      });
  });

  router.post("/auth", (req, res) => {
    console.log("Client request for user authentication.");
    // Client request user authentication
    let username = req.body.username;
    let userData = {
      first: "",
      last: "",
      username: "",
      email: "",
      token: ""
    };

    // Find user record in DB
    console.log("Getting data for " + username);
    User.findOne({ username: username })
      .exec()
      .then(user => {
        if (!user) {
          console.log("User not found.");
          res.json(new Response(false, "User not found."));
          throw new Error("End promise chain");
        } else if (user) {
          console.log("User found.  Checking password");
          userData.first = user.first;
          userData.last = user.last;
          userData.username = user.username;
          userData.email = user.email;
          return bcrypt.compareSync(req.body.password, user.password);
        }
      })

      // Check password
      .then(isValid => {
        console.log("Success:", isValid);
        if (!isValid) {
          res.json(new Response(false, "Invalid password."));
          throw new Error("End promise chain");
        } else if (isValid) {
          console.log("Password is valid.  Creating token.");
          // Define jwt payload
          let payload = {
            username: username
          };

          userData.token = jwt.sign(payload, secret, { expiresIn: "3h" });

          // Success: Respond with jwt
          return res.json(
            new Response(true, "Authentication successful.", userData)
          );
        }
      })
      .catch(error => {
        console.log(error.message);
      });
  });

  router.delete("/delete-account", (req, res) => {
    // Client requests to delete account
    let username = req.headers.username;
    console.log(req.headers.password);
    // Parse data and auth
    User.findOne({ username: username })
      .exec()
      .then(user => {
        if (!user) return res.json(new Response(false, "User not found."));
        return bcrypt.compareSync(req.headers.password, user.password);
      })
      // Check password
      .then(isValid => {
        if (!isValid) return res.json(new Response(false, "Invalid password."));
        return User.findOneAndRemove({ username: username });
      })
      // Success: delete account and respond with success message
      .then(() => {
        // TODO: Remove all images from firebase storage associated with this user
        res.json(new Response(true, "Account has been deleted."));
      })
      .catch(error => {
        console.log(error.message);
      });
  });

  router.post("/change-password", (req, res) => {
    // Client requests to delete account
    let username = req.body.username;

    User.findOne({ username: username })
      .exec()
      .then(user => {
        // Check password
        if (!user) return res.json(new Response(false, "User not found."));
        return bcrypt.compareSync(req.body.password, user.password);
      })

      .then(isValid => {
        if (!isValid) return res.json(new Response(false, "Invalid password."));
        return bcrypt.hash(req.body.newPassword, saltRounds);
      })
      // Hash new password and save to DB
      .then(hash => {
        return User.update(
          { username: username },
          { $set: { password: hash } }
        );
      })

      .then(() => {
        return res.json(new Response(true, "Password has been changed."));
      })
      .catch(error => {
        console.log(error.message);
      });
  });

  router.post("/change-email", (req, res) => {
    let newEmail = req.body.newEmail;
    let token = req.body.token;

    // Parse data and verify token
    verifyToken(token)
      .then(decoded => {
        if (!decoded) return res.json(new Response(false, "Invalid token"));
        return User.findOne({ username: decoded.username });
      })
      // Save new email to DB
      .then(user => {
        if (!user) return res.json(new Response(false, "User not found."));
        user.email = newEmail;
        return user.save();
      })
      // Success: delete account and respond with success message
      .then(() => {
        return res.json(new Response(true, "Email has been changed."));
      })
      .catch(error => {
        console.log(error.message);
      });
  });

  router.get("/get-user-dashboard", (req, res) => {
    let token = req.headers.token;
    console.log("Client request to get user dashboard");
    verifyToken(token)
      .then(decoded => {
        if (!decoded) return res.json(new Response(false, "Invalid token"));
        return User.findOne({ username: decoded.username });
      })

      .then(user => {
        if (!user) return res.json(new Response(false, "User not found."));

        let projectsMin = [];
        // Dashboard does not require full project data
        for (let i = 0; i < user.projects.length; i++) {
          let project = {
            name: user.projects[i].name,
            thumbnailUrl: user.projects[i].thumbnailUrl,
            created: user.projects[i].created,
            lastSaved: user.projects[i].lastSaved
          };
          projectsMin.push(project);
        }
        // Package data to be returned to client
        let userData = {
          username: user.username,
          first: user.first,
          last: user.last,
          email: user.email,
          projects: projectsMin
        };
        console.log("Sending dashboard data to client");
        return res.json(
          new Response(true, "Returning dashboard data", userData)
        );
      })
      .catch(error => {
        console.log(error.message);
      });
  });

  router.post("/save-project", (req, res) => {
    let token = req.body.token;
    let project = JSON.parse(req.body.project);

    verifyToken(token)
      .then(decoded => {
        if (!decoded) return res.json(new Response(false, "Invalid token"));
        return User.findOne({ username: decoded.username });
      })

      .then(user => {
        if (!user) return res.json(new Response(false, "User not found"));

        // Search user's projects for existing project name.
        for (let i = 0; i < user.projects.length; i++) {
          if (user.projects[i].name === project.name) {
            user.projects.splice(i, 1, project);
            return user.save();
          }
        }
        // If no existing project has this name, then push to DB
        user.projects.push(project);
        return user.save();
      })

      .then(() => {
        return res.json(new Response(true, project.name + " has been saved."));
      })
      .catch(error => {
        console.log(error.message);
      });
  });

  router.get("/get-project", (req, res) => {
    let token = req.headers.token;
    let projectName = req.headers["project-name"];

    verifyToken(token)
      .then(decoded => {
        if (!decoded) return res.json(new Response(false, "Invalid token"));
        // Token verified.  Get project from DB.
        let username = decoded.username;
        return User.findOne({ username: username });
      })

      .then(user => {
        if (!user) return res.json(new Response(false, "User not found"));
        // Return full project data to user
        for (let i = 0; i < user.projects.length; i++) {
          if (user.projects[i].name === projectName) {
            return res.json(
              new Response(
                true,
                "Returning project data for " + projectName,
                user.projects[i]
              )
            );
          }
        }
        return res.json(new Response(false, "Project not found."));
      })
      .catch(error => {
        console.log(error.message);
      });
  });

  router.delete("/delete-project", (req, res) => {
    let token = req.headers.token;
    let projectName = req.headers["project-name"];

    verifyToken(token)
      .then(decoded => {
        if (!decoded) {
          res.json(new Response(false, "Invalid token"));
          throw new Error("End promise chain");
        }
        username = decoded.username;
        return User.findOne({ username: decoded.username });
      })

      .then(user => {
        if (!user) {
          res.json(new Response(false, "User not found"));
          throw new Error("End promise chain");
        }
        // Find and delete project
        for (let i = 0; i < user.projects.length; i++) {
          if (user.projects[i].name === projectName) {

            // Delete all images in firebase storage associated with this project
            let imageFileNames = [];

            // Get fileNames of gallery Images
            user.projects[i].images.forEach(image => {
              if(image.fileName) imageFileNames.push(image.fileName);
            })

            // Get file names of all imageObjects in project
            user.projects[i].slides.forEach(slide => {
              slide.slideObjects.forEach(slideObject => {
                  if(slideObject.fileName) imageFileNames.push(slideObject.fileName);
              })
            })

            // Delete project thumbnail
            let thumbnail = bucket.file(`images/${user.projects[i].thumbnailFileName}`);
            thumbnail.delete();

            // Delete all images in imageFileNames
            imageFileNames.forEach(fileName => {
              let file = bucket.file(`images/${fileName}`);
              file.delete();
            })

            // Delete project from database
            user.projects.splice(i, 1);
            return user.save();
          }
        }
        return res.json(new Response(false, projectName + " not found"));
      })

      .then(() => {
        return res.json(new Response(true, projectName + " has been Deleted."));
      })
      .catch(error => {
        console.log(error.message);
      });
  });

  router.get("/search-pixabay", (req, res) => {
    let searchQuery = req.headers["search-query"];
    let page = req.headers["page"];
    console.log("searchQuery:", searchQuery);
    console.log(req.headers);

    let apiKey = "7780146-3f3faea2d00a0e8da80a92f14";
    let pixabayEndpoint = "https://pixabay.com/api/?";

    request(
      `${pixabayEndpoint}key=${apiKey}&q=${searchQuery}&page=${page}`,
      { json: true },
      (err, data, body) => {
        if (err) console.log(err);
        res.json(body);
      }
    );
  });

  // IMAGE UPLOAD ENDPOINTS
  router.post("/upload-image", (req, res) => {
    // Verify token and upload image dataURL in req.body to firebase
    // Return image url to client
    let token = req.body.token;
    let dataUrl = req.body.dataUrl.toString();
    let fileName = req.body.fileName;
    let base64EncodedImageString = dataUrl.replace(
      /^data:image\/\w+;base64,/,
      ""
    );
    let imageBuffer = new Buffer(base64EncodedImageString, "base64");
    console.log(dataUrl.substring(0, 50));
    console.log(imageBuffer);

    verifyToken(token)
      .then(isValid => {
        if (!isValid) res.json(new Response(false, "Invalid token"));
        console.log("token isValid:", isValid);

        let file = bucket.file(`images/${fileName}`);

        file
          .save(imageBuffer, {
            metadata: { contentType: "image/png" },
            // public: true,
            validation: "md5"
          })
          .then(error => {
            if (error) console.log(error);
            return file.getSignedUrl({
              action: "read",
              expires: "03-09-2491"
            });
          })
          .then(signedUrls => {
            // signedUrls[0] contains the file's public URL
            console.log(signedUrls);
            let uploadData = {
              fileName: fileName,
              url: signedUrls[0]
            };
            res.json(
              new Response(true, "File uploaded to firebase", uploadData)
            );
          });
      })
      .catch(error => console.log(error));
  });

  router.post("/delete-image", (req, res) => {
    console.log("Client request to delete image from firebase.");
    let token = req.body.token;
    let fileNames = req.body.fileNames;

    verifyToken(token)
      .then(isValid => {
        if (!isValid) res.json(new Response(false, "Invalid token"));
        console.log("token isValid:", isValid);

        for (let i = 0; i < fileNames.length; i++) {
          let file = bucket.file(`images/${fileNames[i]}`);
          file.delete();
          if(i + 1 === fileNames.length) return
        }
      })
      .then(() => {
        console.log("Image successfully deleted from firebase.");
        res.json(new Response(true, "Image deleted from firebase"));
      })
      .catch(error => console.log(error));
  });

  return router;
};
