// app.js

const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');
const cors = require('cors'); // Importer cors

const app = express();
const PORT = process.env.PORT || 3000;

// Utiliser cors
app.use(cors());

// Middleware
app.use(bodyParser.json());
app.use(express.json());


// Routes
const jokeRoutes = require('./routes/index');
app.use('/api', jokeRoutes); // Préfixe "/api" pour les routes

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); 
});
