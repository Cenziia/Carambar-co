// tests/test.js

const request = require('supertest');
const app = require('../app');  

describe('GET /api/jokes/random', () => {
    it('respond with a random joke', async () => {
        const response = await request(app).get('/api/jokes/random');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('content');
    });
});
