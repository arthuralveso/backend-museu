const Sequelize = require('sequelize');
const User = require('../models/User');

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({
      where: Sequelize.or(
        { email: req.body.email },
        { phone: req.body.phone },
        { username: req.body.username }
      ),
    });
    if (userExists) {
      return res.status(400).json({ error: 'Email already exists.' });
    }

    const { name, username, phone, email } = await User.create(req.body);

    return res.json({
      name,
      username,
      phone,
      email,
    });
  }
}

module.exports = new UserController();
