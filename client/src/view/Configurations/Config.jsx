import React, { useState } from 'react';
import { Box, Grid, Paper } from '@mui/material';
import Button from '@mui/material/Button';
// import ButtonLittle from "../../components/Buttons/ButtonLittle/ButtonLittle.jsx";
import MedicineHome from "../../components/Private/Config/MedicineHome.jsx";
import PasswordChange from "../../components/Private/Config/PasswordChange.jsx";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Config = () => {
    const [select, setSelect] = useState(1);
    const [isHovered, setIsHovered] = useState();
    const navigate = useNavigate();

    const bgImage = {
        backgroundImage:
            "url('https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/imagenes%2Fondas.png?alt=media&token=609c6221-06ce-405c-9ed9-b5e53b1d90fe')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "",
        backgroundAttachment: 'fixed',
        backgroundColor: "",
        padding: '15px'
    };
    const handleSubmenu = (num) => () => {
        setSelect(num);
    };
    const handlePrevius = (e) => {
        e.preventDefault();
        navigate("/farmacia-extranet");
    }
    
    return (
        <Box>
            <h1 style={{ marginTop: '10px', padding: '0' }}>Configuración</h1>
            <Grid sx={{ height: 'auto' }} container spacing={2} columns={16}>
                    <Grid item xs={16} sm={6} md={6} lg={6} xl={6}>
                        <Box 
                            style={{ 
                                display:'flex', 
                                flexDirection: 'column', 
                                alignContent: 'center',
                                justifyContent: 'space-between',
                                padding: '5px',
                                height: '100%',
                            }}
                        >
                            <Box 
                                style={{ 
                                    display: 'flex', 
                                    flexDirection: 'column',
                                }}
                            >
                                <Button 
                                    style={{ 
                                        color: 'var(--background-btn2)' 
                                    }}
                                    onClick={handleSubmenu(1)}
                                >
                                    Medicamentos del Home
                                </Button>
                                <Button 
                                    style={{ 
                                        color: 'var(--background-btn2)' 
                                    }}
                                    onClick={handleSubmenu(2)}
                                >
                                    Cambia tu contraseña
                                </Button>
                            </Box>
                            <FaArrowLeft 
                                style={{
                                    margin: '2vh', 
                                    fontSize: '20px',
                                    color: isHovered ? 'var(--background-btn1)' : 'var(--font-navbar-color3)',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                onClick={handlePrevius}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={16} sm={10} md={10} lg={10} xl={10}>
                        <Paper sx={{ height: 'auto', marginRight: '20px', marginLeft: '20px', padding: '2vw', ...bgImage }}>
                            {select === 1 ? <MedicineHome /> : <PasswordChange />}
                        </Paper>
                    </Grid>
            </Grid>
        </Box>
    );
}
export default Config;

