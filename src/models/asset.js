import mongoose from 'mongoose';

const assetSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
    }
})

const Asset = mongoose.model('Asset', assetSchema);

export default Asset;