module.exports = {
  init(app){
    //const staticRoutes = require("../routes/static");
    //const listRoutes = require("../routes/lists");
    const userRoutes = require("../routes/users");
    //app.use(staticRoutes);
    //app.use(listRoutes);
    app.use(userRoutes);
  }
}
