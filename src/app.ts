import express from 'express';
import CreateTable from "./modules/CreateTable/CreateTable";
import loadData from "./modules/LoadData/LoadData";
import GetSongs from "./modules/GetSongs/GetSongs";
import GetSongByLetter from "./modules/GetSongByLetter/GetSongByLetter";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Working !!!');
});

app.get('/create', (req, res) => {
    const createTable = new CreateTable("test")
    createTable.create()
    res.send('Create data complete');
});

app.get('/load', (req, res) => {
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

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});

