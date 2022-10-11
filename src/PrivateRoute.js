import { useLocation, Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    let location = useLocation();

    let isLoggedIn = false;
    const userToken = localStorage.getItem('personalKey');
    if(userToken) isLoggedIn = true;

    if (!isLoggedIn) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    } else {
        return children;
    }
}

export default PrivateRoute