const request = require('request');
const server = require('../../src/server');
const base = "http://localhost:3000/";

describe("routes: staic", () => {

   describe("GET /", () => {
      it("should return status 200 and have 'Welcome to Simplepost' in the body of the response", (done) => {
         request.get(base, (err, res, body) => {
            expect(res.statusCode).toBe(200);
            expect(res.body).toContain("Welcome to Simplepost");
            done();
         });
      });
   });

});