import express from "express";
import { 
    addProducts
 } from "../../src/api/v1/controllers/productsControllers.js";

const router = express.Router();


router.post("/products", addProducts)

export default router;

// getActivity, getProducts 'Activar funcionalidad'