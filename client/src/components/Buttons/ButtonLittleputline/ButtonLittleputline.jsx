import "./styleButton.css";
import { NavLink } from 'react-router-dom';

const ButtonLittleoutline = ({ sx, onClick, children, to }) => {
  return (
    <NavLink to={to}>
      <button 
          onClick={onClick} 
          className="button_little_outline" 
          sx={sx}
      >
        {children}
      </button>
    </NavLink>
  );
};

export default ButtonLittleoutline;