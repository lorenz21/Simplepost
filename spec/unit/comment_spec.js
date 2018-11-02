const sequelize = require("../../src/db/models/index").sequelize;
const Post = require("../../src/db/models").Post;
const Comment = require("../../src/db/models").Comment;

describe("Comment", () => {

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

    describe("#create()", () => {
      it("should create a comment object with a body and assigned post", (done) => {
         Comment.create({                
           body: "Use your own peices to build it",
           postId: this.post.id
         })
         .then((comment) => {            
           expect(comment.body).toBe("Use your own peices to build it");
           expect(comment.postId).toBe(this.post.id);
           done();
   
         })
         .catch((err) => {
           console.log(err);
           done();
         });
       });
   
       it("should not create a comment with missing body or assigned post", (done) => {
         Comment.create({
           body: "Is this the best Python framework?"
         })
         .then((comment) => {
           done();
         })
         .catch((err) => {
           expect(err.message).toContain("Comment.postId cannot be null");
           done();
         })
       });
   });

});