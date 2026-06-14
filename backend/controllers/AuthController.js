const bcrypt = require("bcryptjs");

const { UserModel } = require("../model/UserModel");

const createSecretToken = require("../utils/SecretToken");


// SIGNUP

const signup = async (req, res) => {

  try {

    const {
      username,
      email,
      password,
    } = req.body;

    const existingUser =
      await UserModel.findOne({ email });

    if (existingUser) {

      return res.status(400).json({
        success: false,
        message: "User already exists",
      });

    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      username,
      email,
      password: hashedPassword,
    });

    const token =
      createSecretToken(user._id);

    res.status(201).json({
      success: true,
      token,
      user,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};


// LOGIN

const login = async (req, res) => {

  try {

    const {
      email,
      password,
    } = req.body;

    const user =
      await UserModel.findOne({ email });

    if (!user) {

      return res.status(400).json({
        success: false,
        message: "User not found",
      });

    }

    const validPassword =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!validPassword) {

      return res.status(400).json({
        success: false,
        message: "Wrong Password",
      });

    }

    const token =
      createSecretToken(user._id);

    res.status(200).json({
      success: true,
      token,
      user,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};


// PROFILE

const getProfile = async (req, res) => {

  try {

    const user =
      await UserModel.findById(req.userId);

    res.json(user);

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};

module.exports = {
  signup,
  login,
  getProfile,
};