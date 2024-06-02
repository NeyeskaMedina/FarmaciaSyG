import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import 'dotenv/config'

import loginRoutes from "./config/routes/loginRoutes.js";

const app = express();
const PORT = process.env.PORT_DB || 4000;

console.log(process.env.DATABASE_URL);
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }))



app.use("/api/v1", loginRoutes);


app.listen(PORT, console.log(`¡Servidor encendido en el puerto! ${PORT}`));

export default app;