import { useContext } from "react";
import { AuthContext } from "../authintications/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;