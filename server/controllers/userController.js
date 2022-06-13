const bcrypt = require('bcrypt');
const ApiError = require('../error/ApiError');
const { User } = require('../db/models');

class UserController {
  async login(req, res, next) {
    const { email, password } = req.body;
    if (email && password) {
      const currentUser = await User.findOne({ where: { email } });
      if (currentUser && await bcrypt.compare(password, currentUser.password)) {
        req.session.admin = { id: currentUser.id, name: currentUser.name };
        return res.json({ isAuth: true });
      }
    } else {
      return next(ApiError.internal('Пользователь не найден'));
    }
  }

  // async check(req, res, next) {
    
  // }
}

module.exports = new UserController();
