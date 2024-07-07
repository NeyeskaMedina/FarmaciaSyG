import pool from "../../../../config/db/conectionDB.js";

const insertCSV = async (products) => {
  try {
    if (products.length === 0) {
      console.log('No hay productos para insertar.');
      return;
    }

    // Construcción de la consulta SQL
    const values = products.map((row, index) => {
      const { code_products, name, quantity_box, price_neto, date_expirate, id_proveedor } = row;
      return `($${index * 6 + 1}, $${index * 6 + 2}, $${index * 6 + 3}, $${index * 6 + 4}, $${index * 6 + 5}, $${index * 6 + 6})`;
    }).join(',');

    const queryText = `
      INSERT INTO products_costs (code_products, name, quantity_box, price_neto, date_expirate, id_proveedor)
      VALUES ${values}
    `;

    // Array con los valores para la consulta
    const queryParams = [];
    products.forEach(row => {
      queryParams.push(row.code_products, row.name, row.quantity_box, row.price_neto, row.date_expirate, row.id_proveedor);
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
    text: `SELECT id, code_products, name, quantity_box, price_neto, date_expirate, id_proveedor 
            FROM products_costs`
  };

  const response = await pool.query(SQLquery);
  return response.rows;
}

const deleteModelDB = async () =>{
  const SQLquery = {
      text: `TRUNCATE TABLE products_costs RESTART IDENTITY`
  };
  const response = await pool.query(SQLquery);
  return response.rows;
}

export {
  insertCSV,
  getData,
  deleteModelDB
};
