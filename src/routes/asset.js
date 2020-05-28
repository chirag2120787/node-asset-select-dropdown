import express from 'express';
import AssetController from './../controller/asset'
const router = express.Router();

router.get('/names/:pageIndex&:pageSize&:search?', AssetController.getNames);

export default router;