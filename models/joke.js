// models/joke.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Joke = sequelize.define('Joke', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

module.exports = Joke;

