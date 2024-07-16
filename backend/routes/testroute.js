const express = require('express');
const router = express.Router();
const {testData} = require('../controllers/subCard');

router.get('/', testData);
module.exports = router