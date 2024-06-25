// v1/controllers/jokeController.js

const { Joke } = require('../../../models');  
const sequelize = require('../../config/config');

// Récupérer toutes les blagues
exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    res.json(jokes);
  } catch (error) {
    console.error('Error retrieving jokes:', error);
    res.status(500).send('Internal Server Error');
  }
};

// Récupérer une blague aléatoire
exports.getRandomJoke = async (req, res) => {
  try {
    const joke = await Joke.findOne({ order: sequelize.random() });
    res.json(joke);
  } catch (error) {
    console.error('Error retrieving random joke:', error);
    res.status(500).send('Internal Server Error');
  }
};

// Récupérer une blague par ID
exports.getJokeById = async (req, res) => {
  const { id } = req.params;
  try {
    const joke = await Joke.findByPk(id);
    if (joke) {
      res.json(joke);
    } else {
      res.status(404).send('Joke not found');
    }
  } catch (error) {
    console.error('Error retrieving joke by ID:', error);
    res.status(500).send('Internal Server Error');
  }
};

// Ajouter une nouvelle blague
exports.addJoke = async (req, res) => {
  const { content } = req.body;
  try {
    const joke = await Joke.create({ content });
    res.status(201).json(joke);
  } catch (error) {
    console.error('Error adding joke:', error);
    res.status(500).send('Internal Server Error');
  }
};