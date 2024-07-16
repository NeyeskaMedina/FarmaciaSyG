import express from "express";
import cors from "cors";
import 'dotenv/config'
import loginRoutes from "./config/routes/loginRoutes.js";
import productRoutes from "./config/routes/productRoutes.js";

const app = express();
const PORT = process.env.PORT_DB || 4000;


app.use(express.json());
app.use(cors());


app.use("/api/v1", loginRoutes);
app.use("/api/v1", productRoutes);


app.listen(PORT, console.log(`¡Servidor encendido en el puerto! ${PORT}`));

export default app;