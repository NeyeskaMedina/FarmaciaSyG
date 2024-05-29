import React from 'react'
import { Grid } from "@mui/material";
import "./select.css"

export const SelectSearch = ( {setData, setLoading, setChangeSelect, originalData} ) => {
  
  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (searchValue === "Seleccione una region"){
        setLoading(false);
        setData(originalData);
        setChangeSelect(true);
    }
    const datosFiltrados = originalData.filter((region) =>
    region.fk_region === searchValue);
    setData(datosFiltrados);
  }
  const handleChangeComuna = (e) =>{
    const searchValue = e.target.value;
    if (searchValue === "Seleccione una region"){
      setLoading(false);
      setData(originalData);
      setChangeSelect(true);
    }
    const datosFiltrados = originalData.filter((comuna) =>
      comuna.fk_comuna === searchValue);
      setData(datosFiltrados);
  }
  const uniqueLocations = {};
  const locationComuna = originalData.filter((location) => {
      if (uniqueLocations[location.comuna_nombre]) {
          return false;
      } else {location
          uniqueLocations[location.comuna_nombre] = true;
          return true;
      }
  });
  return (
    <>
        <h1 style={{width:"100%", textAlign: "center"}}>Encuentra la Farmacia de turno</h1>
        <Grid container spacing={0.5}> 
            <Grid item xs={12} md={6} lg={6}>
                <div className="selectBuscador">
                    <select onChange={handleChange} className="form-select" aria-label="Default select example">
                            <option value="Seleccione una region">Seleccione una region</option>
                            <option value="1">Arica y Parinacota</option>
                            <option value="2">Tarapaca</option>
                            <option value="3">Antofagasta</option>
                            <option value="4">Atacama</option>
                            <option value="5">Coquimbo</option>
                            <option value="6">Valparaiso</option>
                            <option value="7">Metropolitana</option>
                            <option value="8">Libertador General B. O.</option>
                            <option value="9">Maule</option>
                            <option value="10">BioBio</option>
                            <option value="11">Araucania</option>
                            <option value="12">Los Rios</option>
                            <option value="13">Los Lagos</option>
                            <option value="14">Aysen</option>
                            <option value="15">Punta Arenas</option>
                            <option value="16">Ñuble</option>
                    </select>
                </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <div className="selectBuscador">
                    <select onChange={handleChangeComuna} className="form-select" aria-label="Default select example">
                            <option value="Seleccione una region">Seleccione una comuna</option>
                            {locationComuna.map((item) => (
                              <option value={item.fk_comuna}>{item.comuna_nombre}</option>
                            ))}
                    </select>
                </div>
            </Grid>
        </Grid>
    </>
  )
}
