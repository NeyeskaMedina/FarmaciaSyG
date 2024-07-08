import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
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
            <Box>
                <TextField 
                    id="nombre_medicamento" 
                    label="Medicamento" 
                    variant="standard" 
                />   
                <TextField 
                    id="precio" 
                    label="Precio" 
                    variant="standard" 
                />   
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={medHome}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>Posición 1</MenuItem>
                    <MenuItem value={2}>Posición 2</MenuItem>
                    <MenuItem value={3}>Posición 3</MenuItem>
                    <MenuItem value={4}>Posición 4</MenuItem>
                    <MenuItem value={5}>Posición 5</MenuItem>
                </Select>  
            </Box>
        </Box>
)
}
export default MedicineHome;
