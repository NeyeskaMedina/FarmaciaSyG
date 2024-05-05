import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { buttonStyles } from './StyleHoverButtons.jsx';



const buttonStyles1 = {
    my: 2,
    color: 'var(--font-navbar-color)',
    fontFamily: 'var(--font-title)',
    fontSize: '115%',
};

const DesktopButtons = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', width: '37%' }}>
            <Button
                component={NavLink}
                to="/"
                sx={{ ...buttonStyles1, ...buttonStyles }}
            >
                Home
            </Button>
            <Button
                component={NavLink}
                to="/farmacia_de_turno"
                sx={{ ...buttonStyles1, ...buttonStyles }}
            >
                Farmacia de turno
            </Button>
        </Box>
    );
};

export default DesktopButtons;