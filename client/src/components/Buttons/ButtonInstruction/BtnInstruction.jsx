import React from 'react'
import { Typography, Box  } from '@mui/material';
import Button from '@mui/joy/Button';
import Modal from '@mui/material/Modal';


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
    <>
        <Button 
            onClick={handleOpen}
            sx={{ 
                with:'12vw', 
                backgroundColor: 'white',
                height:'4vh', 
                margin:'4px',
                marginTop: '3vh',
                borderRadius: '0px',
                borderBottom: '1px solid',
                marginLeft: '4vw',
                color: 'black',
                '&:hover': {
                    backgroundColor: '#f3f0f9'
                }
            }}> 
            <Typography>Instrucciones</Typography> 
        </Button>
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
                2.- El archivo deberá ir sin encabezado <br />
                3.- Las columnas del archivo deben ser segun corresponda: <br />                     
                        <h3 style={{color: 'green', margin: '0'}}>codigo | nombre | precio-neto | precio-total</h3>
          </Typography>
        </Box>
      </Modal>
    </>
  )
}
export default BtnInstruction;
