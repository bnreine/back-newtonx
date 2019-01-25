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
  }

}
