// docs/swagger.js


const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Carambar Jokes API",
      version: "1.0.0",
      description: "API for managing Carambar jokes"
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1"
      },
      {
        url: "http://localhost:3000/api/v2"
      }
    ]
  },
  apis: ['./v1/routes/*.js', './v2/routes/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
