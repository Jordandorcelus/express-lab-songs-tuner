const db = require('../db/dbConfig');


const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
    } catch (error) {
        return error;
    }
};


const getSong = async (id) => {
    try {
        const oneSong = await db.one("SELECT * FROM songs  WHERE id=$1", id);
        return oneSong;
    } catch (error) {
        return error;
    }
};


const createSong = async (song) => {
    try {
        const newSong = await db.one("INSERT INTO songs (name, artist, album, time_in_sec, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *", [song.name, song.artist, song.album, song.time_in_sec, song.is_favorite]);
            return newSong;
    } catch (error) {
        return error;
    }
};


const destroySong = async (id) => {
    try {
        const deleteSong = await db.one("DELETE FROM songs WHERE id=$1 RETURNING *", id);
        return deleteSong;
    } catch (error) {
        return error;
    }
};


const updateSong = async (id, song) => {
    try {
        const changeSong = await db.one("UPDATE songs SET name=$1, artist=$2, album=$3, time_in_sec=$4, is_favorite=$5 WHERE id=$6 RETURNING *", [song.name, song.artist, song.album, song.time_in_sec, song.is_favorite, id]);
            return changeSong;
    } catch (error) {
        return error;
    }
};



module.exports = { getAllSongs, getSong, createSong, destroySong, updateSong };