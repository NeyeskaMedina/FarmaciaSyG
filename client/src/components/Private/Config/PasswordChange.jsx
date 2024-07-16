import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react'
import TextField from "@mui/material/TextField";
import { ContextGlobal } from "../../../context/ContextGlobal.jsx";
import ButtonLittle from "../../../components/Buttons/ButtonLittle/ButtonLittle.jsx";
import { postChangePassword } from "../../../apiRest/apiPharmacy/postPharmacy.js";
import swal from "sweetalert";

const PasswordChange = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validateData, setValidateData] = useState(null)

  const { dataPassword, setDataPassword } = ContextGlobal()

  useEffect(() => {
    setDataPassword({
      oldPassword,
      newPassword,
      confirmPassword
    });


  }, [oldPassword, newPassword, confirmPassword, setDataPassword]);

  const validateFields = () => {
    let valid = null;
    if 
    ( 
      oldPassword !== '' && 
      newPassword !== '' && 
      confirmPassword !== ''
    ) if (
        newPassword === confirmPassword)
      {
        valid = true
        setValidateData(true);
      } else {
        valid = false
        setValidateData(false);
      }
      return valid;
}
  
    const handleConfig = async () =>{
      const response = await postChangePassword(dataPassword);
      if (validateFields() && response.loading === true){
          swal("¡Se actualizó su contraseña correctamente!", {
                icon: "success",
          });          
      } else {
        swal(
          "¡Error al cambiar la contraseña!",
          "Por favor, verifica los datos e intenta nuevamente.",
          "error"
        );
      }
    }
    
  return (
      <Box>
        <h2 style={{ textAlign: 'center' }}>Cambia tu contraseña</h2>
        <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: 'auto'
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="old-password-input"
                label="Contraseña anterior"
                type="password"
                autoComplete="off"
                onChange={(e) => setOldPassword(e.target.value)}
            />
            <TextField
                id="new-password-input"
                label="Contraseña nueva"
                type="password"
                autoComplete="off"
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <TextField
                id="confirm-password-input"
                label="Repita la contraseña"
                type="password"
                autoComplete="off"
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <ButtonLittle 
                onClick={handleConfig}
                sx={{ margin: '0px', padding: '0' }}
            >
                <p style={{fontSize: '16px', margin: '0'}}>Actualizar</p>
            </ButtonLittle>

        </Box>
        
      </Box>
  )
}

export default PasswordChange;
