import axios from "axios";
const accessToken = import.meta.env.TOKEN_API;
console.log(accessToken);

async function getAllDocuments(){
    
    const pageSize = 50; // Tamaño de página
    let totalPages = 1; // Número total de páginas, inicializado en 1
    let allDocuments = []; //array vacio para ingresar las respuestas
    try {
        const response = await axios(`https://api.bsale.io/v1/documents.json?limit=${pageSize}`, 
        { headers: {
            'access_token': accessToken, 
            'Content-Type': 'application/json'}
        });
        if (response.status !== 200) {
            throw new Error(`Error al obtener los documentos ${response.status}`);
        }
        // Obtener el número total de documentos y calcular el número total de páginas
        const totalDocuments = response.data.count;
        console.log(totalDocuments);
        totalPages = Math.ceil(totalDocuments / pageSize);
        console.log(totalPages)

        // Agregar los documentos de la primera página a la lista total
        allDocuments = [...allDocuments, ...response.data.items];

        for (let page = 2; page <= totalPages; page++) {
            const nextPageResponse = await axios.get(`https://api.bsale.io/v1/documents.json?limit=${pageSize}&page=${page}`, {
                headers: {
                    'access_token': accessToken, 
                    'Content-Type': 'application/json'
                }
            });
            // Agregar los documentos de la página actual a la lista total
            allDocuments = [...allDocuments, ...nextPageResponse.data.items];
        }
        return allDocuments;
    } catch (err) {
        console.error(err);
        return null;
    }
}
async function getDocumentDetails(documentId) {
    try {
        const response = await axios(`https://api.bsale.io/v1/documents/${documentId}/details.json`, 
        { headers: {
            'access_token': accessToken, 
            'Content-Type': 'application/json'}
        });
        if (response.status !== 200) {
            throw new Error(`Error al obtener los detalles del documento ${documentId}: ${response.status}`);
        }
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function getAllDocumentDetails(documents) {
    const allDetails = [];
    for (const document of documents) {
        const details = await getDocumentDetails(document.id);
        allDetails.push(details);
    }
    return allDetails;
}

const getDetails = async () =>{
    try {
        const documents = await getAllDocuments();
        const response = await getAllDocumentDetails(documents)
        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export {
    getDetails
}