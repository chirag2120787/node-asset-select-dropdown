import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import models, { connectDb } from './src/models';
import assetRouter from './src/routes/asset';

require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '100mb' }));

app.use('/', assetRouter);

const eraseDatabaseOnSync = true;

connectDb().then(async() => {
    if (eraseDatabaseOnSync) {
        await Promise.all([
            models.Asset.deleteMany({})
        ]);
        // createAsset();
    }
    app.listen(process.env.PORT, () =>
        console.log(`Asset select app listening on port ${process.env.PORT}!`),
    );
});

const createAsset = async() => {
    const asset = new models.Asset({
        name: 'Asset_2',
    });

    await asset.save();

};

module.exports = app;