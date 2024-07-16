const express = require('express');
const router = express.Router();
const {answerSubmission} = require('../controllers/answerSubmision')

router.post('/',answerSubmission)


module.exports = router