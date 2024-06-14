import multer from "multer";
// import csv from "csv-parser";
// import fs from "fs";
// import { insertCSV } from "../models/productModel.js"


  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb){
      cb(null, `${Date.now()}_${file.originalname}`)
    }
  })
  
  const uploadSingleFile = multer({ storage: storage });
  export const upload = uploadSingleFile.single('myFile');

  //Aqui envio los datos a la base de datos
  export const uploadFile = (req, res) => {
    // if (!req.file) {
    //   return res.status(400).send({ response: 'No se ha cargado ningún archivo' });
    // }
      res.send({response: 'Archivo cargado con exito'})
  };
  
  
  // upload.single('file')(req, res, async (err) => {
  //   if (err) {
  //     return res.status(400).send({ error: 'Error al subir el archivo' });
  //   }

    // const filePath = req.file.path;
    // const results = [];

  //   fs.createReadStream(filePath)
  //     .pipe(csv())
  //     .on('data', (data) => results.push(data))
  //     .on('end', async () => {
  //       try {
  //         await insertCSV(results);
  //         fs.unlinkSync(filePath); // Elimina el archivo después de procesarlo
  //         res.status(200).json({ message: 'Datos insertados correctamente' });
  //       } catch (err) {
  //         console.error('Error al insertar los datos', err);
  //         res.status(500).json({ error: 'Error al insertar los datos' });
  //       }
  //     });
  // });