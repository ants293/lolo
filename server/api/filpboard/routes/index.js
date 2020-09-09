const express = require('express');
const router = express.Router();

const recieveXmlList = require('../controllers/list');

router.get('/', recieveXmlList);

module.exports = router;
