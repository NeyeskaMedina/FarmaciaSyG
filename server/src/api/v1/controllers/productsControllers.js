import { 
    insertProductsDB
} from "../models/productsModel.js";
//Agrego y actualizo los productos de la base de datos
const addProductsDB = async (products) => {
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
        }));
        console.log('Productos insertados en la base de datos FarmaciaSYG.');
        return response;
    } catch (error) {
        console.error('Error al insertar productos en la base de datos PostgreSQL:', error);
    }
};

export {
    addProductsDB
}