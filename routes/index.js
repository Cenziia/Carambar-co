// routes/index.js
 

const express = require('express');
const router = express.Router();
const jokeController = require('../controllers/jokeController');

/**
 * @swagger
 * /jokes:
 *   get:
 *     summary: Retrieve a list of jokes
 *     responses:
 *       200:
 *         description: A list of jokes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   content:
 *                     type: string
 */
router.get('/jokes', jokeController.getAllJokes);

/**
 * @swagger
 * /jokes/random:
 *   get:
 *     summary: Retrieve a random joke
 *     responses:
 *       200:
 *         description: A random joke
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 content:
 *                   type: string
 */
router.get('/jokes/random', jokeController.getRandomJoke);

/**
 * @swagger
 * /jokes/{id}:
 *   get:
 *     summary: Retrieve a joke by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A joke by ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 content:
 *                   type: string
 *       404:
 *         description: Joke not found
 */
router.get('/jokes/:id', jokeController.getJokeById);

/**
 * @swagger
 * /jokes:
 *   post:
 *     summary: Add a new joke
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Joke created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 content:
 *                   type: string
 */
router.post('/jokes', jokeController.addJoke);

module.exports = router;
