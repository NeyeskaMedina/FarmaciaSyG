import { 
    deleteModelDB 
} from "../models/productModel.js";

const deleteCSV = async (req, res) => {
    try {
        const response = await deleteModelDB();
        res.status(200).json({ response : response });
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
    deleteCSV
}