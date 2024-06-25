// app.js

const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger/swagger');
const cors = require('cors'); // Importer cors

const app = express();
const PORT = process.env.PORT || 3000;

const { addAlias } = require('module-alias');

// Alias pour le répertoire 'models'
addAlias('@models', `${__dirname}/models`);
addAlias('@config', `${__dirname}/config/config`);

// Utiliser cors
app.use(cors());

// Middleware
app.use(bodyParser.json());
app.use(express.json());

// Import and use versioned routes
const v1 = require('./v1');
const v2 = require('./v2');

app.use('/api/v1', v1);
app.use('/api/v2', v2);

/*// Routes
const jokeRoutes = require('./routes/index');
app.use('/api', jokeRoutes); // Préfixe "/api" pour les routes*/

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); 
});
