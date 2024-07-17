const { run } = require('../helpers/ai');
const { connection } = require('mongoose');
const { saveTestResult } = require('../helpers/saveTest');

/**
 * Handles the submission of answers for a course.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const answerSubmission = async (req, res) => {
    // Extract course and answers from the request
    const { course } = req.query;
    const { answers, user } = req.body; // Ensure user is extracted from req.body

    // Log course and answers for debugging
    console.log("course:", course);
    console.log("answers:", answers);
    console.log("user:", user.email);

    // Access the 'cse' collection
    const collection = await connection.collection('cse');

    // Find the data for the specified course
    const data = await collection.findOne({ c_id: course });

    // Retrieve questions from the data
    const questions = data.questions;
    console.log("questions:", questions);

    // Calculate marks based on questions and answers
    let marks = await run(questions, answers);
    console.log("marks:", marks);

    // Extract the input string from the marks
    const inputString = marks;

    // Extract the marks array from the input string
    const arrayString = inputString.match(/\[(.*)\]/)[0];
    const marksArray = JSON.parse(arrayString);

    // Calculate the total marks
    let total_marks = 0;
    for (let i = 0; i < marksArray.length; i++) {
        total_marks += marksArray[i];
    }

    // Log the total marks
    console.log("total_marks:", total_marks);

    // Log the marks array for reference
    console.log(marksArray);

    // Save the test result for the user
    saveTestResult(user.email, course, total_marks);

    return res.json({ message: "submitted successfully" });
};

module.exports = { answerSubmission };
