import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { searchProductBsale } from "../../apiRest/apiBsale/consultBsale.js";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import { Box } from "@mui/material";
import './loading.css'

const SearchResult = () => {
    const { name } = useParams()
    const [isLoading, setIsLoading] = useState('');
    const [response, setResponse] = useState('');
    const relativeImagePath = import.meta.env.VITE_IMAGE

  console.log(relativeImagePath);
    useEffect(()=>{
      getProduct(name)
    },[])
  
    const getProduct = async (name) =>{
        try {
            const result = await searchProductBsale(name);
            setIsLoading(true)
            setResponse(result.filter((item) => item.stock > 0))
        } catch (err) {
          console.error(err)
        }
    }
  
    if (isLoading){ 
      return (
      <>
      <ProductCard 
        products={response}
        productName={name}
      />      
      </>
      )
    } else {
      return (
      <>
        <Box sx={{ display: 'flex', width: '100%', height: '50vh', justifyContent: 'center', alignItems: 'center' }}>
          <p style={{ fontSize: '20px' }}>Cargando...</p>
          <img className='rotate' style={{width: '50px'}} src={relativeImagePath} alt="" />
        </Box>
      </>
      )
    }
}
export default SearchResult;