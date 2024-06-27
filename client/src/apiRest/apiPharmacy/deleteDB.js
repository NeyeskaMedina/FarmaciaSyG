import axios from "axios";
const URL = import.meta.env.VITE_URL_BACK;

const deleteDB = async () =>{
    try {
        const token = window.localStorage.getItem("token");
        const response = await axios.delete(`${URL}/products_costs`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        });
        
        return { response: response.data, error: null, loading: true }
    } catch (err) {
        console.error("Error al eliminar datos de la BD", err);
        return { response: [], error: "Error al eliminar datos de la BD", loading: false };
    }
}


export {
    deleteDB
}