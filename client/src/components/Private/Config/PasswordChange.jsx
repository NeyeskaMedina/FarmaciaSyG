import { Box } from '@mui/material';
import React from 'react'
import TextField from "@mui/material/TextField";

const PasswordChange = () => {
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
                id="outlined-password-input"
                label="Contraseña anterior"
                type="password"
                autoComplete="off"
            />
            <TextField
                id="new-password-input"
                label="Contraseña nueva"
                type="password"
                autoComplete="off"
            />
            <TextField
                id="repeat-password-input"
                label="Repita la contraseña"
                type="password"
                autoComplete="off"
            />
        </Box>
      </Box>
  )
}

export default PasswordChange;
