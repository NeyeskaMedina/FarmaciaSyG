import axios from "axios";
const URL = import.meta.env.VITE_URL_BACK;

const loginUser = async (dataUser) => {
    try {
        const response = await axios.post(`${URL}/login`, dataUser);
        return { response: response.data, error: null, loading: true };
    } catch (error) {
        console.error("Error al iniciar sesión", error);
        return { response: [], error: "Error al iniciar sesión", loading: false };
    }
};

export {
    loginUser
}