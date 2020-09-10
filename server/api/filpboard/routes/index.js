const express = require('express');
const router = express.Router();

const recieveXmlList = require('../controllers/list');
const recieveArticle = require('../controllers/article');

router.get('/', recieveXmlList);
router.post('/article',recieveArticle);

module.exports = router;
