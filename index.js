const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const router = express.Router();
const path = require('path');
const mongoose = require('mongoose');
const user = require('./routes/user')(router); 

mongoose.connect('mongodb://noodles01:noodles01@ds149593.mlab.com:49593/deckbuilder2');

// Middleware
// router.use(function timeLog(req, res, next) {
//     console.log('Time: ', Date.now());
//     next();
// });

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(user);

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});


// Start server
app.listen(process.env.PORT || 3000, () => {
    console.log('Server started');
});