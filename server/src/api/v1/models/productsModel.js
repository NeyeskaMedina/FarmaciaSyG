import pool from "../../../../config/db/conectionDB.js";



const insertProductsDB = (id, name, product_type) => {
    const SQLquery = {
        text: `INSERT INTO products (id, name, product_type) 
                VALUES ($1, $2, $3) RETURNING *`,
        values: [id, name, product_type]
    }
    const response =  pool.query(SQLquery)
    return response.rows[0];
}

export {
    insertProductsDB,
}