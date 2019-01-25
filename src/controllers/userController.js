const userQueries = require("../db/queries.users.js");


module.exports = {
  getAllUsers(req, res, next){
    userQueries.getAllUsers((err, users) => {
      if(err){
        res.redirect("/");
      } else {
        res.send({users});
      }
    })
  }
}
