import { CiImageOn } from "react-icons/ci";
import { Box } from '@mui/material';
import "./style.css";


const ButtonBlue = ({ onClick, children, descuento, texto }) => {
  return (
    <button onClick={onClick} className="button_blue">
        <Box sx={{ display: 'flex', alignItems: 'center', gap:'5px' }}>
                <CiImageOn 
                    size={30}
                />
            <Box sx={{ display: 'flex', flexDiretion: 'column' }}>
                    <p className="text_title">Ibuprofeno</p>
                    {/* <p>Ver más</p> */}
            </Box>
        {children}
        </Box>
    </button>
  );
};

export default ButtonBlue
