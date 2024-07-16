import { useNavigate } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(() => {
        // Initialize state from local storage if available
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const navigate = useNavigate(); // Correctly use useNavigate here

    useEffect(() => {
        if (!user) {
            axios.get('./profile')
                .then(({ data }) => {
                    setUser(data);
                })
                .catch(error => {
                    console.error('Error fetching profile:', error);
                });
        }
    }, []); // Empty dependency array to run only once on mount

    useEffect(() => {
        // Update local storage whenever the user changes
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    const logout = async () => {
        try {
            // Optional: Inform the server that the user is logging out
            // Ensure this endpoint exists
            await axios.post('/logout');

            // Clear user state and local storage
            await setUser(null);
            await localStorage.removeItem('user');
            await localStorage.removeItem('answers');
            await localStorage.removeItem('selectedCourse');
            await sessionStorage.clear();


            // Redirect to login page
            await navigate('/login');
            setTimeout(() => {
                window.location.reload();
            }, 100);
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
            {children}
        </UserContext.Provider>
    );
}
