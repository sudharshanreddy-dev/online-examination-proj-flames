const mongoose = require('mongoose');
const Result = require('../models/result'); // Adjust the path as necessary



const saveTestResult = async (email, testName, marks) => {
    try {
        let result = await Result.findOne({ email });

        if (!result) {
            // Create a new result document if it doesn't exist
            result = new Result({ email, tests: [{ testName, marks }] });
        } else {
            // Check if the test already exists
            const testIndex = result.tests.findIndex(test => test.testName === testName);
            if (testIndex > -1) {
                // Update the marks if the test exists
                result.tests[testIndex].marks = marks;
            } else {
                // Add a new test entry if it doesn't exist
                result.tests.push({ testName, marks });
            }
        }

        await result.save();
        console.log('Test result saved successfully');
    } catch (error) {
        console.error('Error saving test result:', error);
    }
};

// Example usage
module.exports = { saveTestResult };
