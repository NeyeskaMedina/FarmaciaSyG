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
        const token = window.localStorage.getItem("token");
        const response = await axios.post(`${URL}/products_costs`, CSV, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        });
        return { response: response.data, error: null, loading: true }
    } catch (err) {
        console.error("Error al enviar datos a BD", err);
        return { response: [], error: "Error al enviar datos a BD", loading: false };
    }
}
const postChangePassword = async (dataPassword) => {
    try {
        const response = await axios.post(`${URL}/change-password`, dataPassword );
        console.log(response.data);
        return { response: response.data, error: null, loading: true };
    } catch (err) {
        console.error("Error al modificar la contraseña", err);
        return { response: [], error: "Error al cambiar contraseña", loading: false };
    }
}

export {
    loginUser,
    postCSV,
    postChangePassword,
}