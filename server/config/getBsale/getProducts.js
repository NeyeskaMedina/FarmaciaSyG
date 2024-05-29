import axios from 'axios';
import 'dotenv/config'



const accessToken = "61e76d6132cc379f2e1dcc3924f2ee55d43aae68"; 

// Función para obtener todos los productos de la API de Bsale
const getAllProducts = async () =>  {
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


export {
    getAllProducts
}