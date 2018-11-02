const Post = require("./models").Post;

module.exports = {
   getAllPosts(callback) {
      return Post.findAll()
  
      .then((posts) => {
        callback(null, posts);
      })
      .catch((err) => {
        callback(err);
      })
    },
   addPost(newPost, callback){
      return Post.create(newPost)
      .then((post) => {
         callback(null, post);
      })
      .catch((err) => {
         callback(err);
      });
   },
   getPost(id, callback){
      return Post.findByPk(id)
      .then((post) => {
         callback(null, post);
      })
      .catch((err) => {
         callback(err);
      });
   }
}