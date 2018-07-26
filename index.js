const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3000;

const router = express.Router();

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Route
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Start server
app.listen(port, ()=>{
    console.log('Server started on port ' + port);
})