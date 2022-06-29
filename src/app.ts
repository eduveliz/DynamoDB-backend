import express from 'express';
import CreateTable from "./modules/CreateTable/CreateTable";
import loadData from "./modules/LoadData/LoadData";

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


app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});

