import React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

const StaticBoxMenuConfig = () => {
  return (
    <Box 
        style={{ 
            display:'flex', 
            flexDirection: 'column', 
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
    </Box>
)
}
export default StaticBoxMenuConfig;

