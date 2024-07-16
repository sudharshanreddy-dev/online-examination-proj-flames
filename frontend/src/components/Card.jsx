import React from 'react';
import {useNavigate} from "react-router-dom";

const Card = ({ heading, description, buttonText,handleClick }) => {
    const navigate = useNavigate();

    // const handleButtonClick = () => {
    //     navigate(`/exam?c_id=${cId}`);
    // };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{heading}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button onClick={handleClick}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default Card;