// import { 
//     insertProductsDB
// } from "../models/productsModel.js";
// import { handleError } from "../utils/utils.js";

// //Agrego y actualizo los productos de la base de datos
// const addProducts = async (req, res) => {
//     const { items } = req.body;
//     if (!Array.isArray(items) || items.length === 0) {
//         return res.status(400).json({ error: 'El cuerpo de la solicitud debe contener una lista de productos en "items".' });
//     }
//     console.log(req.body);
//     try {
//         let id = "";
//         let name = "";
//         let product_type = "";
//         // Espera a que se resuelvan todas las consultas de inserción en paralelo
//         const response = await Promise.all(items.map(async (item) => {
            
//                 id = item.id;
//                 name = item.name;
//                 product_type = item.product_type_name
        
//             return await insertProductsDB(id, name, product_type);
//         }));
//         res.status(201).json({ products: response });
//     } catch (error) {
//         const errorFound = handleError(error.code) || [{ status: 500, message: 'Error interno del servidor' }];
//         return res.status(errorFound[0]?.status).json({ error: errorFound[0]?.message });
//     }
// };

// export {
//     addProducts
// }