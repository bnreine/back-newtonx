const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController")

router.get("/all_users", userController.getAllUsers);
router.get("/user/:userId", userController.getUser);

module.exports = router;
