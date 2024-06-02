import pool from "../../../../config/db/conectionDB.js";


const verifyUser = async (user) => {
    
    const sqlQuery = {
        text: `SELECT * FROM Users 
                        WHERE username= $1`,
        values: [user],
    }
    const response = await pool.query(sqlQuery);
    return response.rows[0];

    
}

export { verifyUser }