const express = require('express');
const app = express();
const cors = require('cors');
const songsController = require('./controllers/songsController');


//Middleware!!!
app.use(express.json());
app.use(cors());
app.use('/songs', songsController);


//locahost:5009/
app.get('/', (req, res) => {
    res.send("Welcome to Tuner!")
});


app.get('*', (req, res) => {
    res.status(404).send("Page Not Found")
});



module.exports = app;