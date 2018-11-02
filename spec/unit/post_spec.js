const sequelize = require("../../src/db/models/index").sequelize;
const Post = require("../../src/db/models").Post;

describe("Post", () => {
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

   describe("#create()", () => {
      it("should create a post object with a title and body", (done) => {
         Post.create({
            title: "Python web frameworks",
            body: "Flask, Django, Pyramid, and more"
         })
         .then((post) => {
            expect(post.title).toBe("Python web frameworks");
            expect(post.body).toBe("Flask, Django, Pyramid, and more");
            done();
         })
         .catch((err) => {
            console.log(err);
            done();
         });
      });
      it("should not create a post with missing title or body", (done) => {
         Post.create({
            title: "Python web frameworks"
         })
         .then((post) => {
            done();
         })
         .catch((err) => {
            expect(err.message).toContain("Post.body cannot be null");
            done();
         });
      });
   });

});