/**
 * @jest-environment node
 */
const request = require('supertest');
const app = require('./index');

describe('index.js module', () => {
  describe('Static file serving at root', () => {
    test('It should response the GET method', (done) => {
      request(app)
        .get('/')
        .then((response) => {
          expect(response.statusCode).toBe(200);
          const contentType = response.header['content-type'];
          expect(contentType.includes('text/html')).toBe(true);
          done();
        });
    });

    test('It should reject the POST method', (done) => {
      request(app)
        .post('/')
        .then((response) => {
          expect(response.statusCode).toBe(405);
          done();
        });
    });
  });
  describe("app.all('/*') route", () => {
    test('It should response the GET method to /products', (done) => {
      request(app)
        .get('/products')
        .then((response) => {
          expect(response.statusCode).toBe(200);
          expect(Array.isArray(response.body)).toBe(true);
          const contentType = response.header['content-type'];
          expect(contentType.includes('application/json')).toBe(true);
          done();
        });
    });

    test('It should reject to an invalid route', (done) => {
      request(app)
        .get('/iawfopiajwfoajwf')
        .then((response) => {
          expect(response.statusCode).toBe(404);
          done();
        });
    });
  });
});
