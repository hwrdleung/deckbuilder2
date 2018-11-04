const express = require('express');
const User = require('../models/user');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const secret = 'secret';

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});


let Response = function (success, message, body) {
    return {
        success: success,
        message: message,
        body: body
    }
}

let verifyToken = (token) => {
    console.log('Verifying token');
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) console.log(err);
            if (!decoded) reject(Error('Invalid token'));
            console.log(decoded);
            resolve(decoded);
        })
    });
}

router.post('/new-account', (req, res) => {
    console.log('Client requests to create new account')
    // Client requests to create new user account
    let first = req.body.first;
    let last = req.body.last;
    let username = req.body.username;
    let email = req.body.email;

    // Check for existing user by username
    User.findOne({ username: username }).exec()
        .then(user => {
            if (user) {
                console.log('This username is already in use.')
                res.json(new Response(false, 'This username is already in use.'));
                throw new Error('End promise chain');
            }
            return User.findOne({ email: email });
        })
        // Check for existing user by email
        .then(user => {
            if (user) {
                console.log('This email address has been used to create an account.');
                res.json(new Response(false, 'This email address has been used to create an account.'));
                throw new Error('End promise chain');
            }
            console.log('Hashing password')
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
                console.log('There was an error saving user to database.');
                res.json(new Response(false, 'Registration unsuccessful. Please try again.'));
                throw new Error('End promise chain');
            }
            console.log('Registration successful');
            let payload = {
                username: username
            }
            return res.json(new Response(true, 'Registration successful', jwt.sign(payload, secret, { expiresIn: '3h' })));
        })
        .catch(error => { console.log(error.message); });
});

router.post('/auth', (req, res) => {
    console.log('Client request for user authentication.');
    // Client request user authentication
    let username = req.body.username;

    // Find user record in DB
    console.log('Getting data for ' + username);
    User.findOne({ username: username }).exec()
        .then(user => {
            if (!user) {
                console.log('User not found.');
                res.json(new Response(false, 'User not found.'));
                throw new Error('End promise chain');
            } else if (user) {
                console.log('Checking password');
                return bcrypt.compare(req.body.password, user.password);
            }
        })

        // Check password
        .then(isValid => {
            console.log('Success:', isValid);
            if (!isValid) {
                res.json(new Response(false, 'Invalid password.'));
                throw new Error('End promise chain');
            } else if (isValid) {

                // Define jwt payload
                let payload = {
                    username: username
                }

                // Success: Respond with jwt
                return res.json(new Response(true, 'Authentication successful.', jwt.sign(payload, secret, { expiresIn: '3h' })));
            }
        })
        .catch(error => { console.log(error.message); });
});

router.delete('/delete-account', (req, res) => {
    // Client requests to delete account
    let username = req.body.username;
    console.log(req.body.password);
    // Parse data and auth
    User.findOne({ username: username }).exec()
        .then(user => {
            if (!user) return res.json(new Response(false, 'User not found.'));
            return bcrypt.compare(req.body.password, user.password);
        })
        // Check password
        .then(isValid => {
            if (!isValid) return res.json(new Response(false, 'Invalid password'));
            return User.findOneAndRemove({ username: username });
        })
        // Success: delete account and respond with success message
        .then(() => {
            res.json(new Response(true, 'Account has been deleted.'));
        })
        .catch(error => { console.log(error.message); });
});

router.post('/change-password', (req, res) => {
    // Client requests to delete account
    let username = req.body.username;

    User.findOne({ username: username }).exec()
        .then(user => {
            // Check password
            if (!user) return res.json(new Response(false, 'User not found.'));
            return bcrypt.compare(req.body.password, user.password);
        })

        .then(isValid => {
            if (!isValid) return res.json(new Response(false, 'Authentication failed.'));
            return bcrypt.hash(req.body.newPassword, saltRounds);
        })
        // Hash new password and save to DB
        .then(hash => {
            return User.update({ username: username }, { $set: { password: hash } });
        })

        .then(() => {
            return res.json(new Response(true, 'Password has been changed.'));
        })
        .catch(error => { console.log(error.message); });
});


router.post('/change-email', (req, res) => {
    let newEmail = req.body.newEmail;
    let token = req.body.token;

    // Parse data and verify token
    verifyToken(token)
        .then(decoded => {
            if (!decoded) return res.json(new Response(false, 'Invalid token'));
            return User.findOne({ username: decoded.username });
        })
        // Save new email to DB
        .then(user => {
            if (!user) return res.json(new Response(false, 'User not found.'));
            user.email = newEmail;
            return user.save()
        })
        // Success: delete account and respond with success message
        .then(() => {
            return res.json(new Response(true, 'Email has been changed.'));
        })
        .catch(error => { console.log(error.message); });
});

router.get('/get-user-dashboard', (req, res) => {
    let token = req.headers.token;

    verifyToken(token)
        .then(decoded => {
            if (!decoded) return res.json(new Response(false, 'Invalid token'));
            return User.findOne({ username: decoded.username });
        })

        .then(user => {
            if (!user) return res.json(new Response(false, 'User not found.'));

            let projectsMin = [];
            // Dashboard does not require full project data
            for (let i = 0; i < user.projects.length; i++) {
                let project = {
                    name: user.projects[i].name,
                    thumbnail: user.projects[i].thumbnail,
                    created: user.projects[i].created
                }
                projectsMin.push(project);
            }
            // Package data to be returned to client
            let userData = {
                username: user.username,
                first: user.first,
                last: user.last,
                email: user.email,
                projects: projectsMin
            }
            return res.json(new Response(true, 'Returning dashboard data', userData));
        })
        .catch(error => { console.log(error.message); });
});

router.post('/save-project', (req, res) => {
    let token = req.body.token;
    let project = JSON.parse(req.body.project);

    verifyToken(token)
        .then(decoded => {
            if (!decoded) return res.json(new Response(false, 'Invalid token'));
            return User.findOne({ username: decoded.username });
        })

        .then(user => {
            if (!user) return res.json(new Response(false, 'User not found'));

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
            return res.json(new Response(true, project.name + ' has been saved.'));
        })
        .catch(error => { console.log(error.message); });
});

router.get('/get-project', (req, res) => {
    let token = req.headers.token;
    let projectName = req.headers['project-name'];

    verifyToken(token)
        .then(decoded => {
            if (!decoded) return res.json(new Response(false, 'Invalid token'));
            // Token verified.  Get project from DB.
            let username = decoded.username;
            return User.findOne({ username: username })
        })

        .then(user => {
            if (!user) return res.json(new Response(false, 'User not found'));
            // Return full project data to user
            for (let i = 0; i < user.projects.length; i++) {
                if (user.projects[i].name === projectName) {
                    return res.json(new Response(true, 'Returning project data for ' + projectName, user.projects[i]));
                }
            }
            return res.json(new Response(false, 'Project not found.'));
        })
        .catch(error => { console.log(error.message); });
});

router.delete('/delete-project', (req, res) => {
    let token = req.headers.token;
    let projectName = req.headers['project-name'];

    console.log(req.headers);

    verifyToken(token)
        .then(decoded => {
            if (!decoded) {
                res.json(new Response(false, 'Invalid token'));
                throw new Error('End promise chain');
            }
            return User.findOne({ username: decoded.username });
        })

        .then(user => {
            if (!user) {
                res.json(new Response(false, 'User not found'));
                throw new Error('End promise chain');
            }
            // Find and delete project
            for (let i = 0; i < user.projects.length; i++) {
                if (user.projects[i].name === projectName) {
                    user.projects.splice(i, 1);
                    return user.save();
                }
            }
            return res.json(new Response(false, projectName + ' not found'));
        })

        .then(() => {
            return res.json(new Response(true, projectName + ' has been Deleted.'));
        })
        .catch(error => { console.log(error.message); });

});

module.exports = router;