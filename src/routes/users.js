const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController")

router.get("/all_users", userController.getAllUsers);
router.get("/user/:userId", userController.getUser);
router.post("/add_user", userController.addUser);

module.exports = router;
