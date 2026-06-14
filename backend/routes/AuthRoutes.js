const express = require("express");

const router = express.Router();

const {
  signup,
  login,
  getProfile,
} = require("../controllers/AuthController");

const verifyUser =
require("../middleware/AuthMiddleware");


router.post("/signup", signup);

router.post("/login", login);

router.get(
  "/profile",
  verifyUser,
  getProfile
);

module.exports = router;