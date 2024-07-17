// import { UserContext } from "./userContext.jsx";
// import { useContext } from "react";
// import { Navigate } from "react-router-dom";
//
// export function PrivateRoute({ children }) {
//     const { user, loading } = useContext(UserContext);
//
//
//     if (loading) {
//         return <div>Loading...</div>; // Show a loading indicator or null
//     }
//
//     if (!user) {
//         return <Navigate to="/login" />;
//     }
//
//     return children;
// }

import { createContext, useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

// Create the PrivateContext
export const PrivateContext = createContext({});

export function PrivateRoute({ children }) {
    const { permission } = useContext(PrivateContext); // Use the context to get the permission state

    if (!permission) {
        return <Navigate to="/login" />;
    }
    return children;
}

export const usePrivate = () => useContext(PrivateContext);

export function PrivateProvider({ children }) {
    const [permission, setPermission] = useState(() => {
        // Retrieve the permission from localStorage
        const savedPermission = localStorage.getItem('permission');
        return savedPermission === 'true';
    });

    useEffect(() => {
        // Store the permission in localStorage whenever it changes
        localStorage.setItem('permission', permission);
    }, [permission]);

    return (
        <PrivateContext.Provider value={{ permission, setPermission }}>
            {children}
        </PrivateContext.Provider>
    );
}
