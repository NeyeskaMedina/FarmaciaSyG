import { Box, Grid, Typography, Link } from "@mui/material";
import { linkStyles } from '../Footer/LinkStyles.jsx';
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { CiInstagram } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa';
import Facebook from "../Facebook/Facebook.jsx";

const styleSocialMedia = {
    color: 'var(--font-btn6-color)',
    fontSize: '25px',
    textAlign: 'center',
}
const textInformation = {
    fontFamily: 'var(--font-body)',
    color: 'var(--font-navbar-color)',
    fontSize: '14px'
}

const AboutPharmacy = () => {
    return (
        <Grid container spacing={0.5} >
            <Grid item xs={12} md={6} lg={6}>
                <Box >
                    <Typography sx={{ fontFamily: 'var(--font-title)', textAlign: 'center' }}>
                        <h2>Sobre La Farmacia</h2>
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px', justifyContent: 'center', padding: "10px 45px" }}>
                        <Typography sx={{ ...textInformation }}>
                            Somos un emprendimiento Calameño que busca satisfacer la necesidad
                            de la población de medicamentos a un menor costo y atención de
                            calidad.
                        </Typography >
                        <Typography sx={{ ...textInformation }}>
                            Además nuestros profesionales están preparados para
                            dar atención farmacéutica, con el fin de que nuestros clientes
                            puedan hacer uso correcto de sus medicamentos y así resolver de
                            manera eficiente sus problemas de salud.
                            Esperamos poder cumplir
                        </Typography>
                        <Typography sx={{ ...textInformation }}>
                            con las expectativas, tanto personales como de la población, en el
                            corto plazo y así poder posicionarnos como la alternativa
                            preferida por los Calameños que buscan precios accesibles, calidad en
                            los productos y atención.
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <Facebook />
            </Grid>
            <Grid item xs={12} lg={12}>
                <Box>
                    <Typography sx={{ ...styleSocialMedia, fontFamily: 'var(--font-title)' }}>
                        Contactanos por nuestras redes
                    </Typography>
                    <Typography sx={{ ...styleSocialMedia, fontFamily: 'var(--font-title)' }}>
                        sociales
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={12} lg={12} >
                <Box sx={{ display: "flex", justifyContent: "center", gap: "25px", flexWrap: "wrap" }}>
                    <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center", mt: '8px' }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography sx={{ ...styleSocialMedia }}>
                                <FaFacebookF />
                            </Typography>
                            <Link href="https://www.facebook.com/farmaciasyg" underline="none" target="_blank" sx={{ ...linkStyles, ...styleSocialMedia }}>
                                {'facebook.com/farmaciasyg'}
                            </Link>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography sx={{ ...styleSocialMedia }}>
                                <CiInstagram />
                            </Typography>
                            <Link href="https://www.instagram.com/farmaciasyg" underline="none" target="_blank" sx={{ ...linkStyles, ...styleSocialMedia }}>
                                {'instagram.com/farmaciasyg/'}
                            </Link>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center", mt: '8px' }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography sx={{ ...styleSocialMedia }}>
                                <FaWhatsapp />
                            </Typography>
                            <Link href="tel:+56552866270" underline="none" target="_blank" sx={{ ...linkStyles, ...styleSocialMedia }}>
                                {'+56 55 2866270'}
                            </Link>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography sx={{ ...styleSocialMedia }}>
                                <FaXTwitter />
                            </Typography>
                            <Link href="https://twitter.com/FarmaciaSYG" underline="none" target="_blank" sx={{ ...linkStyles, ...styleSocialMedia }}>
                                {'x.com/FarmaciaSYG'}
                            </Link>
                        </Box>
                    </Box >
                </Box>
            </Grid>
        </Grid>
    );
};

export default AboutPharmacy;
