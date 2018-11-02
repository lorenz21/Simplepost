const Comment = require("./models").Comment;

module.exports = {
    createComment(newComment, callback){
      return Comment.create(newComment)
      .then((comment) => {
        callback(null, comment);
      })
      .catch((err) => {
        callback(err);
      });
    },
  }