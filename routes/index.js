const express = require('express');
const router = express.Router();

const { sendHomepage, sendFiles } = require('../controllers/mainController');
const { testSendData } = require('../controllers/testController');
const { register } = require('../controllers/userController');

router.get('/api/test', testSendData);

router.get('/', sendHomepage);
router.post('/user/register', register);
router.get('/*', sendFiles);

module.exports = router;
