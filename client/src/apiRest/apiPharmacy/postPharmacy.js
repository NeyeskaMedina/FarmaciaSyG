import axios from "axios";
const URL = import.meta.env.VITE_URL_BACK;

const loginUser = async (dataUser) => {
    try {
        const response = await axios.post(`${URL}/login`, dataUser);
        return { response: response.data, error: null, loading: true };
    } catch (err) {
        console.error("Error al iniciar sesión", err);
        return { response: [], error: "Error al iniciar sesión", loading: false };
    }
};

const postCSV = async (CSV) => {
    try {
        const response = await axios.post(`${URL}/products_costs`, CSV);
        return { response: response.data, error: null, loading: true }
    } catch (err) {
        console.error("Error al enviar datos a BD", err);
        return { response: [], error: "Error al enviar datos a BD", loading: false };
    }
}

export {
    loginUser,
    postCSV
}