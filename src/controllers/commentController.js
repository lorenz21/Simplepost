const commentQueries = require("../db/queries.comments.js");

module.exports = {
   create(req, res, next){
      let newComment = {
         body: req.body.body,
         postId: req.params.postId
      };

      commentQueries.createComment(newComment, (err, comment) => {
      if(err){
         req.flash("error", err);
      }
         res.redirect(req.headers.referer);
      });
   }
 }