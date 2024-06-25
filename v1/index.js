
//v1/index.js

const express = require('express');
const router = express.Router();

const jokeRoutes = require('./routes/jokes');
router.use('/jokes', jokeRoutes);

module.exports = router;
