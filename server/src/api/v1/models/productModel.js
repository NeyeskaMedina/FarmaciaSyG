import pool from "../../../../config/db/conectionDB.js";

const insertCSV = async (products) => {
  try {
    // Construcción de la consulta SQL
    const values = products.map((row, index) => {
      const { id, name, price_neto, price_total } = row;
      return `($${index * 4 + 1}, $${index * 4 + 2}, $${index * 4 + 3}, $${index * 4 + 4})`;
    }).join(',');

    const queryText = `
      INSERT INTO products_costs (id, name, price_neto, price_total)
      VALUES ${values}
    `;

    // Array con los valores para la consulta
    const queryParams = [];
    products.forEach(row => {
      queryParams.push(row.id, row.name, row.price_neto, row.price_total);
    });

    // Ejecuta la consulta
    await pool.query(queryText, queryParams);
  } catch (err) {
    console.error('Error al insertar los datos', err);
    throw err;
  }
};

export {
    insertCSV
}
