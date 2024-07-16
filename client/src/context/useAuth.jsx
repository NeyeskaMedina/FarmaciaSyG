import { createContext, useContext, useState } from "react";
import { loginUser } from "../apiRest/apiPharmacy/postPharmacy.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);


    const loginAuth = async (dataUser) => {
        const { response } = await loginUser(dataUser)

        if (!Array.isArray(response)) {
            setUser(response.login.username);
            localStorage.setItem("token", response.token);
        } else {
            throw new Error("Credenciales inválidas");
        }
    };

    const logout = async () => {
        setUser(null);
        localStorage.removeItem("token");
    };


    return (
        <AuthContext.Provider value={{ user, setUser, loginAuth, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthContext;