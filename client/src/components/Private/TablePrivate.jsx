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

  useEffect(() => {
    const updateData = async () => {
      try {
        const response = await getData();
        const dataWithId = response.response.product.map((item, index) => ({
          ...item,
          id: item.code_products || index,
        }));
        setRows(dataWithId);
        console.log(dataWithId);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos', error);
        setLoading(false);
      }
    };

    updateData();
  }, [updateTable]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default TablePrivate;