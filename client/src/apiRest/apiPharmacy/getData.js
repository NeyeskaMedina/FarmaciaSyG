import axios from "axios";
const URL = import.meta.env.VITE_URL_BACK;

const getData = async () => {
    try {
        const response = await axios.get(`${URL}/products_costs`);
        return { response: response.data, error: null, loading: true }
    } catch (err) {
        console.error("Error al enviar datos a BD", err);
        return { response: [], error: "Error al enviar datos a BD", loading: false };
    }
}
export {
    getData
}