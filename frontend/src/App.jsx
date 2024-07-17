import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "../context/userContext.jsx";
import { Home } from "./pages/Home.jsx";
import { Login } from "./pages/Login.jsx";
import { Register } from "./pages/Register.jsx";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { PrivateRoute , PrivateProvider } from "../context/PrivateRoute.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import {Test} from "./pages/Test.jsx";
import {CourseProvider} from "../context/courseContext.jsx";
import Exam from "./pages/Exam.jsx";
import {Result} from "./pages/Result.jsx";



axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.withCredentials = true


function App() {
    const [count, setCount] = useState(0)

    return (
        <UserContextProvider>

            <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
                <PrivateProvider>
            <CourseProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                {/*<Route path="/dashboard" element={<Dashboard />} />*/}
                {/*<Route path="/test" element={<Test />} />*/}
                {/*<Route path="/exam" element={<Exam />} />*/}
                {/*<Route path="/results" element={<Result />} />*/}
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/test" element={<PrivateRoute><Test /></PrivateRoute>} />
                <Route path="/exam" element={<PrivateRoute><Exam /></PrivateRoute>} />
                <Route path="/results" element={<PrivateRoute><Result /></PrivateRoute>} />
            </Routes>
            </CourseProvider>
                </PrivateProvider>
        </UserContextProvider>
    )
}

export default App