'use strict';

var users = [];

users.push({
  id: 1,
  firstName: "Joe",
  lastName: "Boxer",
  createdAt: new Date(),
  updatedAt: new Date(),
});

users.push({
  id: 2,
  firstName: "Frank",
  lastName: "Morgan",
  createdAt: new Date(),
  updatedAt: new Date(),
});

users.push({
  id: 3,
  firstName: "Maria",
  lastName: "Jones",
  createdAt: new Date(),
  updatedAt: new Date(),
});

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert("Users", users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
