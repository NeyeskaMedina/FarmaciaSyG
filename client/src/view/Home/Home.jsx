import React from 'react'
import Carrusel from "../../components/Carrusel/Carrusel.jsx";
import { Box } from '@mui/material';
// import { getDetails } from "../../getApi/getApi.js";
import "./style.css";
import AboutUs from "../../components/AboutUs/AboutUs.jsx";

export const Home = () => {
    // useEffect(() =>{
    //     async function axiosData(){
    //         try {
    //             const allDetails = await getDetails();
    //             console.log(allDetails)
    //             return allDetails;
    //         } catch (err) {
    //             console.error(err)
    //         }
    //     };  
    //     axiosData();
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
            <section className='AboutUs'>
                <AboutUs />
            </section>
        </div>
    )
}
export default Home; 