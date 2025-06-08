import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children, }) {
    const location = useLocation();
    const from = location.state?.from || "/";

    if (isLoggedIn) {
        return children;
    }
    if (!isLoggedIn) {
        return <Navigate to="/" state={{ from: location }} />;
    }
    return children;

}

export default ProtectedRoute;