const express = require('express');
const songs = express.Router();
const { getAllSongs, getSong, createSong } = require('../queries/song');
const { checkName, checkArtist } = require('../validations/checkSongs');


//Index: localhost:5009/songs
songs.get('/', async (req, res) => {
    const allSongs = await getAllSongs();
    if (allSongs) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "Internal Server Error"})
  }
});


//SHow: localhost:5009/songs/id
songs.get('/:id', async (req, res) => {
    const { id } = req.params;
    const oneSong = await getSong(id);
    if (oneSong) {
        res.status(200).json(oneSong);
    } else {
        res.status(404).json({ error: "Song Not Found" });
    }

});


// Create: localhost:5009/song/
songs.post('/', checkName, checkArtist, async (req, res) => {
    const newSong = await createSong(req.body);
        res.json(newSong);
});





module.exports = songs;