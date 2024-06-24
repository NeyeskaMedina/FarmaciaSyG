import pool from "../../../../config/db/conectionDB.js";

const insertCSV = async (products) => {
  try {
    if (products.length === 0) {
      console.log('No hay productos para insertar.');
      return;
    }

    // Construcción de la consulta SQL
    const values = products.map((row, index) => {
      const { code_products, name, price_neto, price_total, id_proveedor } = row;
      return `($${index * 5 + 1}, $${index * 5 + 2}, $${index * 5 + 3}, $${index * 5 + 4}, $${index * 5 + 5})`;
    }).join(',');

    const queryText = `
      INSERT INTO products_costs (code_products, name, price_neto, price_total, id_proveedor)
      VALUES ${values}
    `;

    // Array con los valores para la consulta
    const queryParams = [];
    products.forEach(row => {
      queryParams.push(row.code_products, row.name, row.price_neto, row.price_total, row.id_proveedor);
    });

    // Ejecuta la consulta
    await pool.query(queryText, queryParams);
    console.log('Datos insertados correctamente');
  } catch (err) {
    console.error('Error al insertar los datos', err);
    throw err;
  }
};

const getData = async () =>{
    const SQLquery = {
    text: `SELECT code_products, name, price_neto, price_total, id_proveedor 
            FROM products_costs`
  };

  const response = await pool.query(SQLquery);
  return response.rows;
}

export {
  insertCSV,
  getData
};
