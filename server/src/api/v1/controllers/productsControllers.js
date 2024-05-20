import { 
    insertProductsDB
} from "../models/productsModel.js";
import { handleError } from "../utils/utils.js";

//Agrego y actualizo los productos de la base de datos
const addProducts = async (req, res) => {
    const { products } = req.body;
    try {
        let response = "";
        // Espera a que se resuelvan todas las consultas de inserción en paralelo
        await Promise.all(products.map(product => {
            const prop = {
                id: product.id,
                name: product.name,
                product_type: product.product_type_name
            }
            console.log(prop);
            const {id, name, product_type} = prop;
            response = insertProductsDB(id, name, product_type);
            return res.status(201).json({ product: response });
        }));
    } catch (error) {
        const errorFound = handleError(error.code) || [{ status: 500, message: 'Error interno del servidor' }];
        return res.status(errorFound[0]?.status).json({ error: errorFound[0]?.message });
    }
};

export {
    addProducts
}