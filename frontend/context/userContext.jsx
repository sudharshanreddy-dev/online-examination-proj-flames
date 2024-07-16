import { useNavigate } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [loading, setLoading] = useState(true); // Add loading state
    const [user, setUser] = useState(() => {
        // Initialize state from local storage if available
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            axios.get('./profile')
                .then(({ data }) => {
                    setUser(data);
                })
                .catch(error => {
                    console.error('Error fetching profile:', error);
                })
                .finally(() => {
                    setLoading(false); // Set loading to false after fetching
                });
        } else {
            setLoading(false); // If user is already set, stop loading
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
            await axios.post('/logout');
            setUser(null);
            localStorage.removeItem('user');
            localStorage.removeItem('answers');
            localStorage.removeItem('selectedCourse');
            sessionStorage.clear();
            navigate('/login');
            setTimeout(() => {
                window.location.reload();
            }, 100);
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <UserContext.Provider value={{ user, setUser, logout, loading }}>
            {children}
        </UserContext.Provider>
    );
}
