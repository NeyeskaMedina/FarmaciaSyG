import 'dotenv/config'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import { verifyUser } from "../models/loginModel.js";
import { handleError } from '../utils/utils.js';


const loginController = async (req, res) => {
    
    const { user, password } = req.body;
 
    try {
        const login = await verifyUser(user);
        console.log(login.password);
        console.log(password);
        if(!login){
            const searchErr = handleError("auth01")
            return res.status(400).json({ error: searchErr[0].message });
        }
        // const isEqual = bcrypt.compareSync(password, login.password );
        let isEqual = "";
        if(password === login.password){
            isEqual = true;
        }else{
            isEqual= false;
        };

        if(!isEqual){
            const searchErr = handleError("auth02")
            return res.status(400).json({  error: searchErr[0].message });
        }
        
        const token = jwt.sign({user: login.user}, process.env.JWT_SECRET, { expiresIn: "1hr" })
        return res.status(200).json({
            message: `Ingreso Exitoso, usuario: ${user}`,
            code: 200,
            token,
            login
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({erroresestan: err.message})
    }
}

export { loginController };
