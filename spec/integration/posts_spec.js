const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/posts";

const sequelize = require("../../src/db/models/index").sequelize;
const Post = require("../../src/db/models").Post;

describe("routes: posts", () => {

   beforeEach((done) => {
      this.post;

      sequelize.sync({force: true}).then((res) => {
         Post.create({
            title: "Python Frameworks",
            body: "Django: Batteries included"
         })
         .then((post) => {
            this.post = post;
            done();
         })
         .catch((err) => {
            console.log(err);
            done();
         });
      });
   });


   describe("user performing CRUD actions for Post", () => {

      describe("GET /posts/:id", () => {
         it("should render a view with the selected post", (done) => {
            request.get(`${base}/${this.post.id}`, (err, res, body) => {
               expect(err).toBeNull();
               expect(body).toContain("Python Frameworks");
               done();
            });
         });
      });

      describe("POST /posts/create", () => {
         it("should create a new post and redirect", (done) => {
            const options = {
               url: `${base}/create`,
               form: {
                  title: "Stranger Things",
                  body: "A series that made Dungeons and Dragons popular"
               }
            };
            request.post(options, 
               (err, res, body) => {
               
               Post.findOne({
                 where: {
                   title: "Stranger Things",
                   body: "A series that made Dungeons and Dragons popular"
                 }
               })
               .then((post) => {
                 expect(post).not.toBeNull();
                 expect(post.title).toBe("Stranger Things");
                 expect(post.body).toBe("A series that made Dungeons and Dragons popular");
                 done();
               })
               .catch((err) => {
                 console.log(err);
                 done();
               });
             })
         });
      });

   });

});

