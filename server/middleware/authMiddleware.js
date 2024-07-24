const jwt = require("jsonwebtoken");
const HttpError = require("../models/errorModel");

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return next(new HttpError("잘못된 토큰입니다.", 403));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, info) => {
    if (err) {
      return next(new HttpError("잘못된 토큰입니다.", 403));
    }

    req.user = info;
    next();
  });
};

module.exports = authMiddleware;
