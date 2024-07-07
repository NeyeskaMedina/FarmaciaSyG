import React, { useState } from 'react';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonLittle from "../../components/Buttons/ButtonLittle/ButtonLittle.jsx";
import MedicineHome from "../../components/Private/Config/MedicineHome.jsx";
import PasswordChange from "../../components/Private/Config/PasswordChange.jsx";


const Config = () => {
    const [select, setSelect] = useState(1)
    const handleConfig = () => {

    }
    const handleSubmenu = (num) => () => {
        setSelect(num);
    };
    
    return (
        <Box sx={{ height:'66vh' }}>
            <h1 style={{ margin: '10px' }}>Configuración</h1>
            <Box style={{ display: 'flex', width: '100vw', height: '80%' }} >
                <Box 
                    style={{ 
                        display:'flex', 
                        flexDirection: 'column', 
                        width: '40%',
                        justifyContent: 'space-between'
                    }}
                >
                    <Box style={{ display: 'flex', flexDirection: 'column' }}>
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
                    <ButtonLittle 
                        onClick={{ handleConfig }}
                        style={{ margin: '0' }}
                    >
                        <p style={{fontSize: '16px', margin: '0'}}>Actualizar</p>
                    </ButtonLittle>
                </Box>
                {select === 1 ? <MedicineHome /> : <PasswordChange />}
            </Box>
            
        </Box>
    );
}
export default Config;

