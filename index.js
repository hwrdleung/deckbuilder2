const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3000;
const fs = require('fs');


let multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({
    storage: storage
});

const router = express.Router();

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'upload')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

function getImages(imageDir, callback) {
    let fileType = '.jpg';
    let files = [];

    fs.readdir(imageDir, function (err, list) {
        for (let i = 0; i < list.length; i++) {
            files.push(list[i]); //store the file name into the array files
        }
        callback (err, files);
    });
}

app.get('/getImageNames', (req, res) => {
    let images = getImages('./upload', (err, images)=>{
        res.json({ images: images });
    });
});


app.post('/upload', upload.single('file'), (req, res) => {
    // the file is uploaded when this route is called with formdata.
    // now you can store the file name in the db if you want for further reference
    console.log('/upload');
    const filename = req.file.filename;
    const path = req.file.path;
    // Call your database method here with filename and path
    res.json({ 'message': 'File uploaded' });
});

// Start server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});