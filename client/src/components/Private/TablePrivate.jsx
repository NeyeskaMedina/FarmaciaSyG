import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getData } from "../../apiRest/apiPharmacy/getData.js";
import { ContextGlobal } from "../../context/ContextGlobal.jsx";


const columns = [
  { field: 'code_products', headerName: 'Código', width: 100 },
  { field: 'name', headerName: 'Medicamentos', width: 600 },
  { field: 'quantity_box', headerName: 'Un_x_caja', width: 100 },
  { field: 'price_neto', headerName: 'Precio Neto', width: 130 },
  { field: 'date_expirate', headerName: 'Fecha vencimiento', width: 130 },
  { field: 'id_proveedor', headerName: 'ID Proveedor', width: 50 },
];

const TablePrivate = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const { updateTable } = ContextGlobal();

  const [columnFilters, setColumnFilters] = useState({
    code_products: '',
    name: '',
    quantity_box: '',
    price_neto: '',
    date_expirate: '',
    id_proveedor: '',
  });

  useEffect(() => {
    const updateData = async () => {
      try {
        const response = await getData();
        const dataWithId = response.response.product.map((item, index) => ({
          ...item,
          id: item.id || index,
        }));
        setRows(dataWithId);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos', error);
        setLoading(false);
      }
    };
    if(updateData){
      updateData();
    }
  }, [updateTable]);

   // Función para aplicar los filtros
   const applyFilters = () => {
    // Lógica para filtrar los datos basado en columnFilters
    // Ejemplo de filtrado básico
    const filteredRows = rows.filter((row) => {
      return (
        (filterByColumn(row.code_products, columnFilters.code_products)) &&
        (filterByColumn(row.name, columnFilters.name)) &&
        (row.quantity_box >= parseFloat(columnFilters.quantity_box) || columnFilters.quantity_box === '') &&
        (row.price_neto >= parseFloat(columnFilters.price_neto) || columnFilters.price_neto === '') &&
        (filterByColumn(row.date_expirate, columnFilters.date_expirate)) &&
        (filterByColumn(row.id_proveedor, columnFilters.id_proveedor))
      );
    });

    return filteredRows;
  };
  // Función para filtrar por coincidencias múltiples en una columna
  const filterByColumn = (cellValue, filterValue) => {
    if (!filterValue) return true; // Mostrar todos los resultados si no hay filtro
    const filters = filterValue.toLowerCase().split(' ').map(filter => filter.trim());
  
    let matched = true;
    for (const filter of filters) {
      if (!cellValue.toLowerCase().includes(filter)) {
        matched = false;
        break;
      }
    }
  
    return matched;
  };
  // Manejar cambios en los filtros de columna
  const handleColumnFilterChange = (e, columnField) => {
    const value = e.target.value;
    setColumnFilters((prevFilters) => ({
      ...prevFilters,
      [columnField]: value,
    }));
  };


  return (
    <div style={{ height: 400, width: '100%', marginBottom: '5vh' }}>
      <div style={{marginBottom: '20px', display: 'flex', gap:'10px'}}>
        <input
          style={{height: '5vh'}}
          type="text"
          placeholder="Filtrar por Código"
          value={columnFilters.code_products}
          onChange={(e) => handleColumnFilterChange(e, 'code_products')}
        />
        <input
          style={{width:"40vw", height: '5vh'}}
          type="text"
          placeholder="Filtrar por Medicamentos"
          value={columnFilters.name}
          onChange={(e) => handleColumnFilterChange(e, 'name')}
        />
        
      </div>
      <DataGrid
        rows={applyFilters()}
        columns={columns}
        disableMultipleColumnsFiltering={false}
        loading={loading}
        style={{ height: '350px'}}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20]}
        checkboxSelection
      />
    </div>
  );
};

export default TablePrivate;