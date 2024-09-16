const express = require('express');
const songs = express.Router();
const { getAllSongs } = require('../queries/song');


//Index: localhost:5009/songs
songs.get('/', async (req, res) => {
    const allSongs = await getAllSongs();
    if (allSongs) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "Internal Server Error"})
  }
});





module.exports = songs;