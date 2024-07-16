import {UserContext} from "./userContext.jsx";
import {useContext} from "react";
import {Navigate} from "react-router-dom";

export function PrivateRoute({children}) {
    const {user} = useContext(UserContext)
    if (!user) {

        return <Navigate to="/login"/>
    }
    return children
}