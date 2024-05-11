import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const isAdmin = true;

    if (!isAdmin) {
        return <Navigate to="/login" />;
    }
    return <Outlet />;
};
export default PrivateRoute;
