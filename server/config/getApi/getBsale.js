import axios from 'axios';
// import cron from 'node-cron';
// import 'dotenv/config'
import { 
    addProductsDB
} from "../../src/api/v1/controllers/productsControllers.js";



const accessToken = "61e76d6132cc379f2e1dcc3924f2ee55d43aae68"; 

// Función para obtener todos los productos de la API de Bsale
async function getAllProducts() {
    const pageSize = 50; // Cantidad de productos por pagina
    let totalPages = 1; // Numeto total de paginas
    let allProducts = []; //Array que guardará todos los productos

    try {
        const response = await axios.get(`https://api.bsale.io/v1/products.json?limit=${pageSize}`, {
            headers: {
                'access_token': accessToken,
                'Content-Type': 'application/json'
            }
        });
        if(response.status !== 200){
            throw new Error(`Error al obtener los documentos ${response.status}`)
        }
        const totalProducts = response.data.count;
        totalPages = Math.ceil(totalProducts / pageSize);
        allProducts = [...allProducts, ...response.data.items]
        for (let page = 2; page <= totalPages; page++){
            const nextPageResponse = await axios.get(`https://api.bsale.io/v1/products.json?limit=${pageSize}&page=${page}`, {
                headers: {
                    'access_token': accessToken,
                    'Content-Type': 'application/json'
                }
            });
            allProducts = [...allProducts, ...nextPageResponse.data.items];
        }
        //extraer el nombre del tipo de producto para retornarlo dentro de todos los productos
        for (let product of allProducts){
            const productTypeResponse = await axios.get(product.product_type.href, {
                headers: {
                    'access_token': accessToken,
                    'Content-Type': 'application/json'
                }
            })
            product.product_type_name = productTypeResponse.data.name;
        }
        return allProducts;
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        return null;
    }
}

// Función para obtener todas las variantes de la API de Bsale
// async function getAllVariants() {
//     const pageSize = 50; // Cantidad de variantes por pagina
//     let totalPages = 1; // Numeto total de paginas
//     let allVariants = []; //Array que guardará todos los variants

//     try {
//         const response = await axios.get(`https://api.bsale.io/v1/variants.json?limit=${pageSize}`, {
//             headers: {
//                 'access_token': accessToken,
//                 'Content-Type': 'application/json'
//             }
//         });
//         if(response.status !== 200){
//             throw new Error(`Error al obtener las variantes ${response.status}`)
//         }
//         const totalVariants = response.data.count;
//         totalPages = Math.ceil(totalVariants / pageSize);
//         allVariants = [...allVariants, ...response.data.items]
//         for (let page = 2; page <= totalPages; page++){
//             const nextPageResponse = await axios.get(`https://api.bsale.io/v1/products.json?limit=${pageSize}&page=${page}`, {
//                 headers: {
//                     'access_token': accessToken,
//                     'Content-Type': 'application/json'
//                 }
//             });
//             allVariants = [...allVariants, ...nextPageResponse.data.items];
//         }
//         return allVariants;
//     } catch (error) {
//         console.error('Error al obtener las variantes:', error);
//         return null;
//     }
// }

// // Función para obtener todos los documentos de la API de Bsale
// async function getDocuments() {
//     const pageSize = 50; // Cantidad de variantes por pagina
//     let totalPages = 1; // Numeto total de paginas
//     let allDocuments = []; //Array que guardará todos los variants

//     try {
//         const response = await axios.get(`https://api.bsale.io/v1/variants.json?limit=${pageSize}`, {
//             headers: {
//                 'access_token': accessToken,
//                 'Content-Type': 'application/json'
//             }
//         });
//         if(response.status !== 200){
//             throw new Error(`Error al obtener las variantes ${response.status}`)
//         }
//         const totalVariants = response.data.count;
//         const totalPagesAll = Math.ceil(totalVariants / pageSize);
//         totalPages = (totalPagesAll / 100);
//         allDocuments = [...allDocuments, ...response.data.items]
//         for (let page = 2; page <= totalPages; page++){
//             const nextPageResponse = await axios.get(`https://api.bsale.io/v1/documents.json?limit=${pageSize}&page=${page}`, {
//                 headers: {
//                     'access_token': accessToken,
//                     'Content-Type': 'application/json'
//                 }
//             });
//             allDocuments = [...allDocuments, ...nextPageResponse.data.items];
//         }
//         return allDocuments;
//     } catch (error) {
//         console.error('Error al obtener las variantes:', error);
//         return null;
//     }
// }
// Función para programar la actualización cada horas
// cron.schedule('0 * * * *', async () => {
//     console.log('Actualizando data...');
//     const products = await getAllProducts();
//     const variants = await getAllVariants();

//     if (products) {
//         console.log('Productos actualizados:', products.length);
//     }
//     if (variants) {
//         console.log('Variantes actualizadas:', variants.length);
//     }
// });

// Ejecutar el código una vez al inicio para obtener los productos inicialmente
(async () => {
    console.log('Obteniendo data inicialmente...');
    try {
        const products = await getAllProducts();
        // const variants = await getAllVariants();

        if (products) {
            //inserto productos en DB
            await addProductsDB(products);
            console.log('Productos obtenidos inicialmente --- enviados a DB:', products.length);
        }
        // if (variants) {
        //     //inserto variantes eb DB
        //     // addVariantsDB(variants)
        //     console.log('Variantes obtenidas inicialmente --- enviadas a DB:', variants.length);
        // }

    } catch (error) {
        console.error(`Error en consulta ApiREST para obtener data`, error)
    }
})();