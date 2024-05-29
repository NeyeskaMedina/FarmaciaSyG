import express from "express";
import { 
    addProducts
 } from "../../src/api/v1/controllers/productsControllers.js";

const router = express.Router();


router.post("/products", addProducts)

// getActivity, getProducts 'Activar funcionalidad'