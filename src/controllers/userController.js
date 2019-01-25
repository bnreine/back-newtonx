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
  },
  getUser(req, res, next){
    userQueries.getUser(req.params.userId, (err, user) => {
      if(err){
        console.log(err);
      } else {
        res.send({user});
      }
    })
  },
  addUser(req, res, next){
    let newUser = {
      firstName: req.body.newUser.firstName,
      lastName: req.body.newUser.lastName
    }
    userQueries.addUser(newUser, (err, user) => {
      if(err){
        console.log(err);
      } else {
        res.send({user});
      }
    })
  }
}
