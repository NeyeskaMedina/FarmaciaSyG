import express from "express";
import cors from "cors";
import 'dotenv/config'


// import productRoutes from "./config/routes/productRoutes.js";





const app = express();
const PORT = process.env.PORT_DB || 4000;

console.log(process.env.DATABASE_URL);
app.use(express.json());
app.use(cors());


// app.use("/api/v1", productRoutes);


app.listen(PORT, console.log(`¡Servidor encendido en el puerto! ${PORT}`));

export default app;