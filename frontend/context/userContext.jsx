import { useNavigate } from "react-router-dom";
import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const navigate = useNavigate();

    const fetchUserProfile = async () => {
        try {
            const { data } = await axios.get('/profile');
            setUser(data);
        } catch (error) {
            console.error('Error fetching profile:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!user) {
            fetchUserProfile();
        } else {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
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
            localStorage.removeItem('permission');
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
        <UserContext.Provider value={{ user, setUser, logout, loading, fetchUserProfile }}>
            {children}
        </UserContext.Provider>
    );
}


