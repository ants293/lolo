const express = require('express');
const router = express.Router();
const flipboardRoutes = require('./filpboard/routes');

router.use('/flipboard', flipboardRoutes);

module.exports = router;
