import { useState, useEffect } from 'react';
import { Box, Button, MobileStepper, useTheme } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import "./style.css";

const steps = [
  {
    description: `https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/imagenes%2Fbanner-web-1.png?alt=media&token=4795ef9c-a025-4ad0-ab36-a4e1434946db`,
  },
  {
    description: 'https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/imagenes%2Fbanner-web-2.png?alt=media&token=3bff0c24-c78f-4adc-a6ab-bb9a8aea7de7',
  },
  {
    description: `https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/imagenes%2Fbanner-web-3.png?alt=media&token=f85b82aa-ab27-4f9b-bd74-433e9900e73a`,
  },
];

const Carrusel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevActiveStep) =>
        prevActiveStep === maxSteps - 1 ? 0 : prevActiveStep + 1
      );
    }, 5000); // Cambia este valor (5000) por el tiempo en milisegundos que deseas entre cada cambio de imagen
    return () => clearInterval(interval);
  }, [activeStep, maxSteps]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
    );
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        height: { xs: '30vh', md: '45vh' }, 
        width: 'cal(100vw-14px)',
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/imagenes%2FGroup%201137%20(2).png?alt=media&token=8a9d97a6-d944-47f9-865d-358f3af39d07")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        flexDirection: 'column',
        position: 'relative',
        paddingTop: '5vh'
      }}
    >
      <Box 
        sx={{ 
          width: '90%',
          height: '90%',
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src={steps[activeStep].description}
          alt=""
          sx={{
            width: '100%',
            height: '100%',
            border: '7px solid white',
            borderRadius: '5px',
          }}
        />
      </Box>
      <MobileStepper
        sx={{ width: '100%', bottom: 0, marginTop: '3vh' }}
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default Carrusel;

