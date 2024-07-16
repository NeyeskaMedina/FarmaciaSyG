import { 
    getData 
} from "../models/productModel.js";
const getProducts = async (req, res) => {
    try {
        const products = await getData();
        res.status(200).json({ product : products });
    } catch (error) {
        const errorFound = handleError(error.code) || [
            { status: 500, message: "Error interno del servidor" },
        ];
    return res
        .status(errorFound[0]?.status)
        .json({ error: errorFound[0]?.message });
    }
}

export {
    getProducts
}