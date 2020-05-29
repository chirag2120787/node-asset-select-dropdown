import assetModel from "./../models/asset";


class AssetService {

    static fetchNames(search, startIndex, endIndex, pageSize) {

        return new Promise((resolve, reject) => {
            if (!search) {
                assetModel.find().limit(pageSize).skip(startIndex).sort({ name: 1 }).exec((err, names) => {
                    if (err) {
                        console.log(err)
                        return reject({ error: 'Names could not be fetched', names: '' })
                    }
                    return resolve({ error: '', names: names })
                });
            } else {
                assetModel.find({ name: { "$regex": search, "$options": "i" } }, (err, namesData) => {
                    if (err) {
                        console.log(err)
                        return reject({ error: 'Names could not be fetched', names: '' })
                    }
                    namesData = namesData.slice(startIndex, endIndex);
                    return resolve({ error: '', names: namesData })
                })
            }
        })

    }

}

export default AssetService