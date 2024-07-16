import React from 'react'
import Carrusel from "../../components/Carrusel/Carrusel.jsx";
import { Box, Container } from '@mui/material';
import "./style.css";
import AboutUs from "../../components/AboutUs/AboutUs.jsx";
import AboutUsMaps from "../../components/AboutUs/AboutUsMaps.jsx";

const bgImage = {
    backgroundImage:
        "url('https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/imagenes%2Fondas.png?alt=media&token=609c6221-06ce-405c-9ed9-b5e53b1d90fe')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: 'fixed',
    backgroundColor: "var(--background-body-color)",
    margin: "0",
    paddingTop: '15px'
};
export const Home = () => {
    // useEffect(() =>{
    //     const updateDataBase = async () => {
    //             console.log("Se Actualiza la base de datos desde el servidor")
    //         try {
    //             await updateDB();
    //             console.log('¡Base de datos actualizada!')
    //         } catch (err) {
    //             console.error(err)
    //         }   
    //     }    
    //     updateDataBase();
    // }, []);
    return (
        <div className="home" >
            <section className="home_carrusel">
                <small>*Para la venta de medicamentos con receta medica debera asistir de forma presencial</small>
                <h1>Bienvenidos a farmacias independientes SYG</h1>
            </section>
            <Carrusel />

            {/* <h2 style={{fontFamily:'var(--font-title)'}}>Productos destacados</h2> */}
            {/* <section className="cart-section"> */}
                {/* <Box className="card-box"> */}
                    {/* {products.product.slice(0, 4).map((item, i) => (
                        <ProductCard key={i} product={item} favorite={searchFavoritebyProduct(item.product_id)}/>
                    ))} */}
                    {/* <ButtonsBlue /> */}
                {/* </Box> */}
            {/* </section> */}
            <Container sx={{ 
                ...bgImage
            }}>
                <section className='AboutUs'>
                    <AboutUs />
                </section>
                <section style={{paddingTop: "5vh"}}>
                    <AboutUsMaps />
                </section>
            </Container>
        </div>
    )
}
export default Home; 