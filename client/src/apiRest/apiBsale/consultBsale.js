import axios from "axios";
const accessToken = import.meta.env.VITE_TOKEN_BSALE;
// NECESITO
// productName : {
//      idVariant: "",
//      variant: "",
//      stock: "",
//      price: "",
//      atributos: "",
// }
const searchProductBsale = async (name) =>{
    
// GET PRODUCTS
    // BUSCO PRODUCTO POR  NOMBRE Y LOS OBTENGO
    try {
        const response = await axios.get(`https://api.bsale.io/v1/products.json?name=${name}`, {
            headers: {
                'access_token': accessToken,
                'Content-Type': 'application/json'
            }
        });
        const result = response.data.items;
        console.log(result);
        
    // SEGUN RESULTADO EXTRAIGO LO QUE NECESITO
        if (!result){
            throw new Error('Error al obtener medicamento');
        }
        const latestProduct = await getVariants(result);
        console.log(latestProduct);
        return latestProduct;        
    } catch (err) {
        console.error('Error al obterner medicamento',err)
        throw err;
    }
}
// GET VARIANTS
    // FUNCION PARA OBTENER LAS VARIANTES CON LOS ATRIBUTOS NECESARIOS SEGUN PRODUCTOS OBTENIDOS
const getVariants = async (products) =>{
    const variants = [];
    for (const product of products){
        const response = await axios.get(product.variants.href, {
            headers: {
                'access_token': accessToken,
                'Content-Type': 'application/json'
            }
        })
        
        
        for (const variant of response.data.items){
            
            let attributes = [];
            let stock = null;

            if (variant.attribute_values) {
                const attributesResponse = await axios.get(variant.attribute_values.href, {
                    headers: {
                        'access_token': accessToken,
                        'Content-Type': 'application/json'
                    }
                });
                attributes = attributesResponse.data.items;
            }
            if (variant.costs && variant.costs.href){
                const costsResponse = await axios.get(variant.costs.href, {
                    headers: {
                        'access_token': accessToken,
                        'Content-Type': 'application/json'
                    }
                })
                // OBTENER STOCK DE LA VARIANTE 
                if (costsResponse.data.history && costsResponse.data.history.length > 0 && costsResponse.data.history[0].reception_detail) {
                    const stockDetailsResponse = await axios.get(costsResponse.data.history[0].reception_detail.href, {
                        headers: {
                            'access_token': accessToken,
                            'Content-Type': 'application/json'
                        }
                    });
                        stock = stockDetailsResponse.data.variantStock;
                } else {
                    console.log("No se encontraron stock para esta variante.");
                    stock = 0;
                }
            }
            

            
             // OOBTENER PRECIO DE CADA VARIANTE
            const priceResponse = await axios.get(`https://api.bsale.io/v1/price_lists/3/details.json?variantid=${variant.id}`, {
                headers: {
                    'access_token': accessToken,
                    'Content-Type': 'application/json'
                }
            });

            let priceDetail = null;
            if (priceResponse.data.items.length > 0) {
                priceDetail = priceResponse.data.items[0];
            } else {
                priceDetail = 0;
            }

            variants.push({
                id: variant.id,
                name: variant.description,
                attributes: attributes,
                stock: stock,
                priceWithTaxes: priceDetail ? priceDetail.variantValueWithTaxes : null
            });

        }
    }
    return variants;
}

export {
    searchProductBsale,
}