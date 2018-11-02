const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/posts/";

const sequelize = require("../../src/db/models/index").sequelize;
const Post = require("../../src/db/models").Post;
const Comment = require("../../src/db/models").Comment;

describe("routes : comments", () => {

   beforeEach((done) => {
      this.post;
      this.comment;
  
      sequelize.sync({force: true}).then((res) => {
        Post.create({
          title: "Python Frameworks",
          body: "Flask: build it yourself"
        })
        .then((post) => {
          this.post = post;
  
          Comment.create({
            body: "A great starter framework",
            postId: this.post.id,
          })
          .then((comment) => {
            this.comment = comment;
            done();
          })
          .catch((err) => {
            console.log(err);
            done();
          });
        });

      });
    });

    describe("POST /posts/:postId/comments/create", () => {

      it("should create a new comment and redirect", (done) => {
         const options = {
            url: `${base}${this.post.id}/comments/create`,
            form: {
               body: "This framework is amazing!",
               postId: this.post.id
            }
         };
         request.post(options,
            (err, res, body) => {
            Comment.findOne({where: {body: "This framework is amazing!"}})
            .then((comment) => {
               expect(comment).not.toBeNull();
               expect(comment.body).toBe("This framework is amazing!");
               expect(comment.id).not.toBeNull();
               done();
            })
            .catch((err) => {
               console.log(err);
               done();
            });
            }
         );
      });

    });

 
 });