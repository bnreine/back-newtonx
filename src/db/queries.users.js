const User = require("./models").User;


module.exports = {
  getAllUsers(callback){
    User.findAll({
      order: [
        ['id', 'ASC'],
      ],
      attributes: ['firstName', 'lastName', 'id']
    })
    .then((users) => {
      callback(null, users);
    })
    .catch((err) => {
      callback(err);
    })
  },

  getUser(userId, callback){
    return User.findById(userId)
    .then((user) => {
      let newUser = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName
      }
      callback(null, newUser);
    })
    .catch((err) => {
      callback(err);
    })
  },
  addUser(newUser, callback){
    return User.create(newUser)
    .then((user) => {
      let newUser = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName
      }
      callback(null, newUser);
    })
    .catch((err) => {
      callback(err);
    })
  },

}
