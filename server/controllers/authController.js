const HttpError = require("../models/errorModel");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

// Register
async function register(req, res, next) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return next(new HttpError("모든 필드를 입력해 주세요.", 400));
    }

    const newEmail = email.toLowerCase();

    const emailExists = await User.findOne({ email: newEmail });
    if (emailExists) {
      return next(new HttpError("이미 사용 중인 이메일입니다.", 400));
    }

    if (password.trim().length < 6) {
      return next(new HttpError("비밀번호는 6자 이상이어야 합니다.", 400));
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      name,
      email: newEmail,
      password: hashedPassword,
    });

    res.status(201).json(`${newUser.name}님 회원가입이 완료되었습니다.`);
  } catch (error) {
    return next(new HttpError("사용자 등록에 실패하였습니다.", 400));
  }
}

module.exports = {
  register,
};
