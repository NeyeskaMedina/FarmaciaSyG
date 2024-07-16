import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActions } from '@mui/material';
import './styles.css';

import ButtonLittleoutline from '../Buttons/ButtonLittleputline/ButtonLittleputline.jsx';

import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';


export default function ProductCard({ products, productName }) {
  const imageURL = '';
  const [selectedSee, setSelectedSee] = useState(false);
return (
    <>
        <h1>Encuentra tu medicamento</h1>
    <Box 
      sx={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        minHeight: "auto", 
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
          <Card className='product-card'
              style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
          >
          <CardContent className='product-card-content'>
            <Box className='block-icon'>
              <CardMedia
                sx={{ height: "auto" }}
                alt={productName}
                image={imageURL}
                title={productName}
              />
            </Box>
            <Box style={{display: 'flex', justifyContent: 'space-between'}}>
              <Box>
                <Typography variant="bold" component="h3" color="textSecondary" >
                    {productName}
                </Typography>
                <Typography variant="normal" component="h5" color="textSecondary" >
                    {item.name}
                </Typography>
              </Box>
              <Box style={{display: 'flex', justifyContent: 'end'}}>
                  <ButtonLittleoutline
                      onClick={()=> setSelectedSee(!selectedSee)} 
                      sx={{width: 'auto', height: 'auto'}}
                      to={`/details-product/${item.id}`}
                  >
                    Ver
                  </ButtonLittleoutline>
              </Box>
            </Box>
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