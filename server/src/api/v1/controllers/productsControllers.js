import multer from "multer";
import csv from "csv-parser";
import fs from "fs";
import { insertCSV } from "../models/productModel.js";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

// Obtener la ruta del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Definir la ruta del directorio 'uploads'
const uploadDir = path.join(__dirname, '..', '..', '..','..', 'uploads');
console.log(uploadDir);
// Verificar si la carpeta 'uploads' existe, y si no crearla
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configuración de almacenamiento de Multer destino y nombre del archivo
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Usar la ruta del directorio verificado
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});

const uploadSingleFile = multer({ storage: storage });
export const upload = uploadSingleFile.single('myFile');

// Función para procesar y guardar el archivo
export const uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).send({ response: 'No se ha cargado ningún archivo' });
  }

  const resHeader = req.body.headTable;
  console.log(`resHeader: ${resHeader}`);

  const filePath = path.join(uploadDir, req.file.filename);
  // console.log(`filePath: ${filePath}`); 
  try {
    // Verificar que el filePath es un archivo, no un directorio
    const stat = fs.lstatSync(filePath);
    if (stat.isDirectory()) {
      throw new Error(`La ruta '${filePath}' es un directorio, no un archivo.`);
    }
  } catch (err) {
    console.error(err.message);
    return res.status(500).send({ response: err.message });
  }

  const results = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      try {
        // Llamar a la función para insertar datos en la base de datos
        await insertCSV(results);
        res.send({ response: 'Archivo cargado y datos insertados con éxito' });
      } catch (error) {
        console.error(error);
        res.status(500).send({ response: 'Error al insertar datos en la base de datos' });
      } finally {
        // Elimina el archivo una vez ingresado a la base
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error(`Error al eliminar el archivo: ${err}`);
          }
        });
      }
    })
    .on('error', (error) => {
      console.error(`Error al procesar el archivo: ${error.message}`);
      res.status(500).send({ response: `Error al procesar el archivo: ${error.message}` });
    });
};

