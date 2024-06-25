// models/index.js

 

const sequelize = require('../backend/config/config');
const Joke = require('./joke');

module.exports = { sequelize, Joke };

