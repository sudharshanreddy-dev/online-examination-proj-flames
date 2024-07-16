import { UserContext } from "./userContext.jsx";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
    const { user, loading } = useContext(UserContext);


    if (loading) {
        return <div>Loading...</div>; // Show a loading indicator or null
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
}
