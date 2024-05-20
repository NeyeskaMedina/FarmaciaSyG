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
      const local = data[0]
      const mapUrl=`https://maps.google.com/maps?q=${local.local_lat},${local.local_lng}&z=15&output=embed`
      return (
        <Box sx={{ ...bgImage, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: '5vh' }}>
          <p style={{ width:'70%', display:'flex', border: 'solid 1px var(--font-btn4-color)', borderRadius: '10px 10px 10px 10px' }}>{local.local_nombre} - {local.local_direccion}</p>
        <iframe 
            title={local.local_nombre}
            src={mapUrl} 
            width="90%" 
            height="450px" 
            style={{border:"0", bordeRadius:'20px 20px 20px 20px'}} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        </Box>
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