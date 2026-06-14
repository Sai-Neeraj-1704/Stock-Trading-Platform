const jwt = require("jsonwebtoken");

const verifyUser = async (req, res, next) => {
  try {

    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Login Required",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.userId = decoded.id;

    next();

  } catch (err) {

    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });

  }
};

module.exports = verifyUser;