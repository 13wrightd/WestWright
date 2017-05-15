const express = require('express');
const router = express.Router();

const { sendHomepage, sendFiles } = require('../controllers/mainController');
const { testSendData } = require('../controllers/testController');

router.get('/api/test', testSendData);

router.get('/', sendHomepage);
router.get('/*', sendFiles);

module.exports = router;
