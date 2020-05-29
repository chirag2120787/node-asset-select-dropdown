import AssetService from '../service/asset.service'


class assetController {

    static async getNames(req, res) {

        if (req.params) {
            const pageIndex = parseInt(req.params.pageIndex);
            const pageSize = parseInt(req.params.pageSize);
            const searchString = req.params.search;

            const startIndex = (pageIndex - 1) * pageSize;
            const endIndex = pageIndex * pageSize;

            try {
                const fetchedNames = await AssetService.fetchNames(searchString, startIndex, endIndex, pageSize)
                res.status(200).json({
                    message: "Asset Names",
                    names: fetchedNames.names
                })
            } catch (error) {
                res.status(500).json({
                    message: "Names could not be fetched"
                });
            }
        } else {
            res.status(400).json({
                message: "No params found"
            });
        }
    }
}


export default assetController