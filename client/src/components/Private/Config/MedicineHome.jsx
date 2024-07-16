import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ButtonLittle from "../../../components/Buttons/ButtonLittle/ButtonLittle.jsx";
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

const MedicineHome = () => {
    const [medHome, setMedHome] = React.useState('');

    const handleChange = (event) => {
        setMedHome(event.target.value);
    };
return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { width: '15vw' },
                display: 'flex',
                flexDirection: 'column'
            }}
            noValidate
            autoComplete="off"
        >
            <h2 style={{ textAlign: 'center', margin: '0' }}>Actualiza los medicamentos del home</h2>
            <Box>
                <TextField 
                    id="nombre_medicamento" 
                    label="Medicamento" 
                    variant="standard" 
                    sx={{ margin: '10px' }}
                />   
                <TextField 
                    id="precio" 
                    label="Precio" 
                    variant="standard"
                    sx={{ margin: '10px' }} 
                /> 
                <TextField 
                    id="stock" 
                    label="Stock" 
                    variant="standard" 
                    sx={{ margin: '10px' }}
                /> 
            </Box>
                <TextField 
                    id="descripcion" 
                    label="Descripcion" 
                    variant="standard"
                    sx={{ margin: '10px' }} 
                />
                <ButtonLittle 
                    style={{ margin: '0' }}
                >
                    <p style={{fontSize: '16px', margin: '0'}}>Actualizar</p>
                </ButtonLittle>      
        </Box>
)
}
export default MedicineHome;
