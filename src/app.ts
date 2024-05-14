import express from 'express';
import CreateTable from "./modules/CreateTable/CreateTable";
import loadData from "./modules/LoadData/LoadData";
import GetSongs from "./modules/GetSongs/GetSongs";
import GetSongByLetter from "./modules/GetSongByLetter/GetSongByLetter";
import GetSongByArtist from "./modules/GetSongByArtist/GetSongByArtist";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Working !!!');
});

app.post('/createTable', (req, res) => {
    const createTable = new CreateTable("test")
    createTable.create()
    res.send('Create data complete');
});

app.post('/loadSongs', (req, res) => {
    loadData()
    res.send('Load data complete');
});

app.get('/songs', (req, res) => {
    GetSongs().then(songs => {
        res.send(songs);
    })
});

app.get('/song', (req, res) => {
    GetSongByLetter().then(songs => {
        res.send(songs);
    })
});

app.get('/artist', (req, res) => {
    GetSongByArtist().then(artist => {
        res.send(artist);
    })
});

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});

