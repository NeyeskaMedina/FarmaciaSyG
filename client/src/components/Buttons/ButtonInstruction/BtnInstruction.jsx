import React from 'react'
import { Typography, Box  } from '@mui/material';
import Button from '@mui/joy/Button';
import Modal from '@mui/material/Modal';
import { FcSettings } from "react-icons/fc";
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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
                2.- Las columnas del archivo deben ser segun corresponda: <br />    
                3.- Debe estar registrado el proveedor antes de ingresar una tabla. <br />               
                        <h3 style={{color: 'green', margin: '0'}}>codigo | nombre | precio-neto | precio-total | id-proveedor</h3>
          </Typography>
        </Box>
      </Modal>
    </Box>
  )
}
export default BtnInstruction;
