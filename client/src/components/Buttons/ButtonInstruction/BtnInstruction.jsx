import React from 'react'
import { Typography, Box  } from '@mui/material';
import Button from '@mui/joy/Button';
import Modal from '@mui/material/Modal';
import { FcSettings } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import "./style.css";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#F3F0F9',
    boxShadow: 24,
    p: 4,
  };
  

export const BtnInstruction = () => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleConfig = (e) => {
        e.preventDefault();
        navigate('/config')
    }
  return (
    <Box sx={{display: 'flex'}}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button 
            onClick={handleOpen}
            sx={{ 
                with:'12vw', 
                backgroundColor: 'white',
                height:'4vh', 
                margin:'0px',
                borderRadius: '0px',
                borderBottom: '1px solid',
                color: 'black',
                '&:hover': {
                    backgroundColor: '#d4e7f4'
                }
            }}> 
            <Typography>Instrucciones</Typography> 
        </Button>
        <FcSettings 
            size={25}
            className='iconSettings'
            onClick={handleConfig}
        />
        </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Instrucciones para cargar el archivo
          </Typography> 
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                1.- Admite solo archivos excel delimitados por comas. <br />    
                2.- Debe estar registrado el proveedor antes de ingresar una tabla. <br />
                3.- Las columnas de precios deben estar en formato general.  <br />
                4.- La columnas con valores NO pueden estar vacias.  <br />
                5.- Las columnas del archivo deben ser segun corresponda: <br />
                        <h3 style={{color: 'green', margin: '0'}}>code_products | name | quantity_box | price-neto | date_expirate | id-proveedor</h3> <br/>
                6.- Verifique que se haya guardado correctamente su archivo
          </Typography>
        </Box>
      </Modal>
    </Box>
  )
}
export default BtnInstruction;
