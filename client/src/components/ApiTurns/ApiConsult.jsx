import React from 'react';
import { useEffect } from "react";
import { Box } from '@mui/material';
import axios from 'axios'

export const ApiConsult = ({ data, setData, setOriginalData, setChangeSelect, changeSelect, setLoading, loading }) => {
  const bgImage = {
    backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/imagenes%2Fondas.png?alt=media&token=609c6221-06ce-405c-9ed9-b5e53b1d90fe')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover",
    mt: '5px',
    backgroundColor: "'var(--background-body-color)'",
    height: "71vh",
};
    useEffect(() => {
      const url = "https://midas.minsal.cl/farmacia_v2/WS/getLocalesTurnos.php";
        (async () =>{
          try {
            const result = await axios.get(url)
            const response = await result.data
            response.sort ((a, b) => a.comuna_nombre.trim().localeCompare (b.comuna_nombre));
            console.log(response);
            setData(response);
            setOriginalData(response);
            setLoading(true)
            setChangeSelect(false)
          } catch (err) {
            console.error("Error al cargar datos de la API:", err);
          }
        })()
    }, [changeSelect]);
  
    
    {
      if(loading && data.length>0) {
        const local = data[0];
        const mapUrl=`https://maps.google.com/maps?q=${local.local_lat},${local.local_lng}&z=15&output=embed`
      return (
        <>
        <Box sx={{ ...bgImage, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5vh', textAlign: 'center' }}>
        <Box style={{ width:'88%', marginTop: '8px', fontWeight:'500', height: '6vh', display: 'flex',padding: '5px 10px 5px 10px',alignItems: 'center', justifyContent:'space-evenly', color:'#fe486a' }}>
          <p style={{margin:'0', width: '25%'}}>Farmacia</p>
          <p style={{margin:'0', width: '25%'}}>Direccion</p>
          <p style={{margin:'0', width: '20%'}}>Telefono</p>
          <p style={{margin:'0', width: '15%'}}>Horario Apertura</p>
          <p style={{margin:'0', width: '15%'}}>Horario Cierre</p>
        </Box>
        <Box sx={{ width:'88%', marginTop: '8px', marginBottom: '8px' , height: '6vh', display: 'flex',justifyContent:'space-evenly', padding: '5px 10px 5px 10px',alignItems: 'center', color:'black', backgroundColor: '#EBEDEF', fontSize: { xs: '10px', md: '14px' }, textAlign: 'center'}}>
          <p style={{margin:'0', width: '25%'}}>{local.local_nombre}</p>
          <p style={{margin:'0', width: '25%'}}>{local.local_direccion}</p>
          <p style={{margin:'0', width: '20%', color: '#111195'}}>{local.local_telefono}</p>
          <p style={{margin:'0', width: '15%'}}>{local.funcionamiento_hora_apertura}</p>
          <p style={{margin:'0', width: '15%'}}>{local.funcionamiento_hora_cierre}</p>
        </Box>
        <iframe 
            title={local.local_nombre}
            src={mapUrl} 
            width="90%" 
            height="450px" 
            style={{border:"0", bordeRadius:'20px 20px 20px 20px'}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        </Box>
        </>
      )
  } else {
    return (
      <>
          <h1 style={{ textAlign: 'center', ...bgImage }}>CARGANDO 💊💊💊</h1>
      </>
    )
  }
  }
}
export default ApiConsult;