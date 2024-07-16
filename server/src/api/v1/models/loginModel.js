import pool from "../../../../config/db/conectionDB.js";
import bcrypt from 'bcryptjs';


const verifyUser = async (user) => {
    
    const sqlQuery = {
        text: `SELECT * FROM Users 
                        WHERE username= $1`,
        values: [user],
    }
    const response = await pool.query(sqlQuery);
    return response.rows[0];
}

const verifyPass = async () => {
    const sqlQuery = {
        text: `SELECT * FROM Users 
                        WHERE user_id = 1 
                        AND username = 'admin'`,
        values: [],
    }
    const response = await pool.query(sqlQuery);
    return response.rows[0];
}
const insertPass = async (newPassword) =>{
    const hashedPassword = bcrypt.hashSync(newPassword);
    console.log(hashedPassword);
    const SQLquery = {
        text: `UPDATE Users
                SET password = $1
                WHERE user_id = 1
                RETURNING *`,
        values: [ hashedPassword ],
      };
      const response = await pool.query(SQLquery);
      return response.rows[0];
}

export { 
    verifyUser,
    verifyPass,
    insertPass,
}