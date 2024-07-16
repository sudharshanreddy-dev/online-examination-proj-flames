import React, { createContext, useState, useContext, useEffect } from 'react';

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
    const [selectedCourse, setSelectedCourse] = useState(() => {
        // Get the initial value from local storage if it exists
        return localStorage.getItem('selectedCourse') || '';
    });

    useEffect(() => {
        // Update local storage whenever selectedCourse changes
        localStorage.setItem('selectedCourse', selectedCourse);
    }, [selectedCourse]);

    return (
        <CourseContext.Provider value={{ selectedCourse, setSelectedCourse }}>
            {children}
        </CourseContext.Provider>
    );
};

export const useCourse = () => useContext(CourseContext);



//
// import React, { createContext, useContext, useState } from 'react';
//
// const CourseContext = createContext();
//
// export const useCourse = () => useContext(CourseContext);
//
// export const CourseProvider = ({ children }) => {
//     const [selectedCourse, setSelectedCourse] = useState('');
//
//     return (
//         <CourseContext.Provider value={{ selectedCourse, setSelectedCourse }}>
//             {children}
//         </CourseContext.Provider>
//     );
// };
//
