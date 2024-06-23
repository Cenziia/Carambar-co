// models/index.js

 

const sequelize = require('../config/config');
const Joke = require('./joke');

module.exports = { sequelize, Joke };

