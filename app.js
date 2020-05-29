import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import models, { connectDb } from './src/models';
import assetRouter from './src/routes/asset';
import randomNameGenerator from './src/service/nameGenerator'

require('dotenv').config();

const app = express();

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json({ limit: '100mb' }));

app.use('', assetRouter);

const eraseDatabaseOnSync = true;

connectDb().then(async() => {
    if (eraseDatabaseOnSync) {
        await Promise.all([
            models.Asset.deleteMany({})
        ]);

        for (let i = 0; i < 1000; i++) {
            createAsset();
        }

    }
    app.listen(process.env.PORT, () =>
        console.log(`Asset select app listening on port ${process.env.PORT}!`),
    );
});

const createAsset = async() => {

    const name = randomNameGenerator();

    const asset = new models.Asset({
        name: name,
    });

    try {
        await asset.save();
    } catch (error) {}

};

module.exports = app;