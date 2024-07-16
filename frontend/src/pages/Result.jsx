import { ResultTable } from "../components/ResultTable.jsx";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { NavbarLog } from "../components/NavbarLog.jsx";
import { UserContext } from "../../context/userContext.jsx";

export function Result() {
    const [testData, setTestData] = useState([]);
    const { user } = useContext(UserContext); // Use useContext correctly

    useEffect(() => {
        if (user) { // Ensure user is not null or undefined
            axios.get(`/marks?user=${user.email}`)
                .then((response) => {
                    console.log(response.data);
                    setTestData(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [user]); // Add user to dependency array

    return (
        <>
            <NavbarLog />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold text-center mb-4">Test Results</h1>
                <ResultTable data={testData} />
            </div>
        </>
    );
}
