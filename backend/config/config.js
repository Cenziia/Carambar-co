// config/config.js

const { Sequelize } = require('sequelize');

// Initialisation de Sequelize avec SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Chemin où SQLite stockera la base de données
  logging: false // Désactiver les logs SQL (optionnel)
});

module.exports = sequelize;
