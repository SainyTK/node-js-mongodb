import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dataStore from './src/dataStore';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/pressure/', (req, res) => {
    dataStore.getPressureData().then((result) => {
        res.json(result);
    }).catch((err) => {
        res.send(`Error : ${err.message}`)
    });
});

app.get('/pressure/:n', (req, res) => {
    const n = req.params.n;
    dataStore.getPressureData(n).then((result) => {
        res.json(result);
    }).catch((err) => {
        res.send(`Error : ${err.message}`)
    });
});

app.post('/pressure', (req, res) => {
    const pressure = req.body;
    console.log(`Posted data : ${pressure}`);

    dataStore.addPressureData(pressure).then((result) => {
        console.log('complete');
        res.json(result);
    }).catch((err) => {
        console.log('error');
        res.send(`Error : ${err.message}`);
    });
});

app.listen(PORT, () => {
    console.log(`Listening to port : ${PORT}`);
});