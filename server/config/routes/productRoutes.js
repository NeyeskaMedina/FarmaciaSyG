import express from "express";
import { 
    upload,
    uploadFile
 } from "../../src/api/v1/controllers/productsControllers.js";
import { getActivity } from "../../middleware/reports.js";
import { getProducts } from "../../src/api/v1/controllers/getProductsControllers.js";
import { deleteCSV } from "../../src/api/v1/controllers/deleteProductsControllers.js"

const router = express.Router();

router.post("/products_costs", upload, uploadFile)
router.get('/products_costs', getActivity, getProducts)
router.delete('/products_costs', getActivity, deleteCSV)

export default router;