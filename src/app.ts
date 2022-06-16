import express from 'express';
import CreateTable from "./services/createTable/CreateTable";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});

app.get('/createTable', (req, res) => {
    const createTable = new CreateTable("test")
    createTable.create()
    res.send('The sedulous hyena ate the antelope!');
});


app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});

