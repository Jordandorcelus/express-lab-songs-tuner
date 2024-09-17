const checkName = (req, res, next) => {
    if (req.body.name) {
        return next;
    } else {
        res.status(400).json({ error: "Name is Required!" });
    }
};

const checkArtist = (req, res, next) => {
    if (req.body.artist) {
        return next
    } else {
        res.status(400).json({ error: "Artist is Required!" });
    }
};


module.exports = { checkName, checkArtist };