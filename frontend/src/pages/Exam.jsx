import React, {useState, useEffect, useContext} from 'react';
import { useCourse } from "../../context/courseContext.jsx";
import { useNavigate } from "react-router-dom";
import {UserContext} from "../../context/userContext.jsx";
import {toast} from "react-hot-toast";
import LoadingBanner from "../components/LoadingBanner.jsx";

import axios from "axios";

const ExamComponent = () => {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const { selectedCourse, setSelectedCourse } = useCourse();
    const {user} = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Check if selectedCourse is empty and try to get it from local storage
        if (!selectedCourse) {
            const savedCourse = localStorage.getItem('selectedCourse');
            if (savedCourse) {
                setSelectedCourse(savedCourse);
            } else {
                alert("Please select a course");
                navigate("/test");
                return;
            }
        }

        if (selectedCourse) {
            axios.get(`/exam?cid=${selectedCourse}`).then((response) => {
                console.log(response.data);
                setQuestions(response.data);
            });
        }
    }, [selectedCourse, setSelectedCourse, navigate]);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(''));

    useEffect(() => {
        // console.log(user)
        // console.log(user.name)
        const savedAnswers = JSON.parse(localStorage.getItem('answers'));
        if (savedAnswers) {
            setAnswers(savedAnswers);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('answers', JSON.stringify(answers));
    }, [answers]);

    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true); // Set the loading state to true
        console.log(selectedCourse);
        console.log(answers);
        const user = 'kappa'; // Replace with the actual user variable if available
        axios.post(`/submit?course=${selectedCourse}`, { user, answers })
            .then((response) => {
                console.log(response.data)
                toast.success(response.data.message);
                setIsLoading(false); // Set the loading state to false
                navigate('/dashboard');
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false); // Set the loading state to false
            });
    };

    const handleChange = (event) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = event.target.value;
        setAnswers(newAnswers);
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
            {/* Navbar */}

            <LoadingBanner isLoading={isLoading} />
            <div className="flex justify-between items-center p-4 bg-gray-800">
                <div className="text-xl font-bold">Logo</div>
                <div className="text-right">
                     <div className="text-lg">user.name</div>
                    <div className="text-sm text-gray-400">user.email</div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex justify-center items-center">
                <form className="bg-gray-700 p-8 rounded-lg shadow-lg w-full max-w-3xl" onSubmit={handleSubmit}>
                    {/* Render Current Question */}
                    <div className="text-2xl mb-4">{questions[currentQuestionIndex]}</div>
                    <textarea
                        rows="6"
                        value={answers[currentQuestionIndex] || ''}
                        onChange={handleChange}
                        className="w-full p-2 mb-6 bg-gray-800 border border-gray-600 rounded-lg resize-none"
                        placeholder="Type your answer here..."
                    />
                    <div className="flex justify-between items-center">
                        <button
                            type="button"
                            onClick={handlePrev}
                            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-500 disabled:opacity-50"
                            disabled={currentQuestionIndex === 0}
                        >
                            Prev
                        </button>
                        <div>
                            <button
                                type="button"
                                onClick={handleNext}
                                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-500 mr-4"
                                disabled={currentQuestionIndex === questions.length - 1}
                            >
                                Next
                            </button>
                            <button
                                type="submit"

                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ExamComponent;
