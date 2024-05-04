// import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Carrusel from "../../componentes/Carrusel/Carrusel.jsx";
// import { getDetails } from "../../getApi/apiBsale.js";
import "./style.css";

export const Home = () => {
    // useEffect(async () =>{
    //         const allDetails = await getDetails();
    //         console.log(allDetails);
    // }, []);
    return (
        <div className="home" >
            <section className="home_carrusel">
                <small>*Para la venta de medicamentos con receta medica debera asistir de forma presencial</small>
                <h1>Bienvenidos a farmacias independientes SYG</h1>

            <Carrusel />
            </section>

            <h2>Productos destacados</h2>
            <section className="cart-section">
                <Box className="card-box">
                    {/* {products.product.slice(0, 4).map((item, i) => (
                        <ProductCard key={i} product={item} favorite={searchFavoritebyProduct(item.product_id)}/>
                    ))} */}
                    <h1>productos</h1>
                </Box>
            </section>
        </div>
    )
}
export default Home; 