import assetModel from "./../models/asset";

class assetController {

    static getNames(req, res) {
        const pageIndex = parseInt(req.params.pageIndex);
        const pageSize = parseInt(req.params.pageSize);

        const search = req.params.search;
        const startIndex = (pageIndex - 1) * pageSize;
        const endIndex = pageIndex * pageSize;

        if (!search) {
            assetModel.find().limit(pageSize).skip(startIndex).exec((err, names) => {
                if (err) {
                    console.log(err)
                    res.status(400).json({
                        message: "Names could not be fetched"
                    });
                }
                res.status(200).json({
                    message: "Asset Names",
                    names: names
                })
            });
        } else {
            assetModel.find({ name: { "$regex": search, "$options": "i" } }, (err, namesData) => {
                namesData = namesData.slice(startIndex, endIndex);
                res.status(200).json({
                    message: "Asset Names",
                    names: namesData
                })
            })
        }
    }

}


export default assetController