import express from "express";
import { 
    upload,
    uploadFile
 } from "../../src/api/v1/controllers/productsControllers.js";

const router = express.Router();

router.post("/products_costs", upload, uploadFile)

export default router;

// getActivity, getProducts 'Activar funcionalidad'