import axios from "axios";
import Card from "../components/Card.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useCourse} from "../../context/courseContext.jsx";

export function Test() {


    const { setSelectedCourse } = useCourse();
    const navigate = useNavigate();

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("/test").then((response) => {
            console.log(response.data);
            setData(response.data);
        });
    }, []);

    const handleClick = (c_id) => {
        console.log('clicked');
        setSelectedCourse(c_id);
        navigate('/exam');
    };

    return (
        <>

            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {data.map((item,index) => (
                        <Card
                            key={index}
                            heading={item.c_id.toUpperCase()}
                            description="This is a description for the first card. It can be as long as needed."
                            buttonText="Attempt test"
                            handleClick={() => handleClick(item.c_id)}
                        />
                    ))}


                </div>
            </div>

        </>
    );
}


