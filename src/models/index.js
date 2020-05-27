import mongoose from 'mongoose';

import Asset from './asset';

const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL);
};

const models = { Asset };

export { connectDb };

export default models;