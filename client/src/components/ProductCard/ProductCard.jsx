import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActions } from '@mui/material';

import './styles.css';

import ButtonLittleoutline from '../Buttons/ButtonLittleputline/ButtonLittleputline.jsx';

import 'react-toastify/dist/ReactToastify.css';


export default function ProductCard({ products, productName }) {
  const imageURL = 'https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg'
    // const [openSnack, setOpenSnack] = useState(false)
    
    // const handleClose = (event, reason) => {
    //     if (reason === 'clickaway') {
    //         return;
    //     }
  
    //     setOpenSnack(false);
    // };
return (
    <>
    <Box 
      sx={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        minHeight: "100vh", 
        padding: "10px"
    }}
    >
      <Box sx={{ 
        display: "grid", 
        gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }, 
        margin: "10px", 
        gap: "15px"
      }}>
      {products.map((item) => (
          <Card className='product-card'>
          {/* <Snackbar open={openSnack} autoHideDuration={3000} onClose={handleClose} >
            <Alert
              onClose={handleClose}
              severity="success"
              style={{ backgroundColor: 'var(--background-btn1)' }}
              variant="filled"
              sx={{ width: '100%' }}
            >
              ¡Excelente! el producto fue añadido al carrito
            </Alert>
          </Snackbar> */}
          <CardContent className='product-card-content'>
            <Box className='block-icon'>
              <CardMedia
                sx={{ height: "150px" }}
                alt={productName}
                image={imageURL}
                title={productName}
              />
            </Box>
            <Typography variant="bold" component="h3" color="textSecondary" >
              {productName}
            </Typography>
            <Typography variant="normal" component="h5" color="textSecondary" >
              {item.name}
            </Typography>
            <Typography
              className='price-content'
              variant="body5"
              color="textSecondary" component="h4">
              <Box>
                Precio:
              </Box>
              <Box className="price">
                ${item.priceWithTaxes}
              </Box>
            </Typography>
            <CardActions className='card-actions'>
              {/* <ButtonLittle onClick={userId ?  () => addProduct() : () => dontProduct()}>
                Añadir al carro
              </ButtonLittle> */}
              <ButtonLittleoutline to={`/details-product/${item.id}`}>
                Ver detalles
              </ButtonLittleoutline>
            </CardActions>
          </CardContent>
          <div className="margin_color">
          </div>
        </Card>
      ))}
      </Box>  
    </Box>
    </>
  );
}
  