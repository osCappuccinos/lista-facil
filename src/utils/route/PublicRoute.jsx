import { Navigate, Outlet } from "react-router-dom";
import { getAuth } from "firebase/auth";

const PublicRoute = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    
    return user ? <Navigate to="/home" replace /> : <Outlet />;
};

export default PublicRoute;