import pool from "../../../../config/db/conectionDB.js";



const insertProductsDB = async (id, name, product_type) => {
    
    const SQLquery = {
        text: `INSERT INTO products (product_id, name, product_type) 
        VALUES ($1, $2, $3) 
        ON CONFLICT (product_id) DO UPDATE SET 
        name = EXCLUDED.name, 
        product_type = EXCLUDED.product_type 
        RETURNING *`,
        values: [id, name, product_type]
    }
    try {
        const response =  await pool.query(SQLquery)
        console.log(response);
        return response.rows[0];
    } catch (err) {
        console.error('Error al insertar productos en la DB', err)
        throw err;
    }
   
}

export {
    insertProductsDB,
}