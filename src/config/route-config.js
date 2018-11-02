module.exports = {
   init(app){
      const staticRoutes = require("../routes/static");
      const postRoutes = require("../routes/posts");
      const commentRoutes = require("../routes/comments");

      app.use(staticRoutes);
      app.use(postRoutes);
      app.use(commentRoutes);
   }
}