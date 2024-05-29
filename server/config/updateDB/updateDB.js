import { getAllProducts } from "../getBsale/getProducts";
import axios from "axios";

// Ejecutar el código una vez al inicio para obtener los productos inicialmente
const updateDB = async () => {
    console.log('Obteniendo data inicialmente...');
    try {
        const products = await getAllProducts();
        // const variants = await getAllVariants();

        if (products) {
            //inserto productos en DB
            try {
                await axios.post('http://localhost:4000/api/v1/products', { 
                    Headers: {products: `${products}`} 
                })
                console.log('Productos obtenidos inicialmente --- enviados a DB:', products.length);
            } catch (error) {
                
            }
        }
        // if (variants) {
        //     //inserto variantes eb DB
        //     // addVariantsDB(variants)
        //     console.log('Variantes obtenidas inicialmente --- enviadas a DB:', variants.length);
        // }
        
    } catch (error) {
        console.error(`Error en consulta ApiREST para obtener data`, error)
    }
};

export {
    updateDB
}