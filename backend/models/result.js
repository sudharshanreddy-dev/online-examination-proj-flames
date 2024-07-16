const mongoose = require('mongoose');

const MarksSchema = new mongoose.Schema({
    testName: String,
    marks: Number,
});

const ResultSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    tests: [MarksSchema],
});

const Result = mongoose.model('result', ResultSchema);

module.exports = Result;
