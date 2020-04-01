const { Model } = require('sequelize');
const Sequelize = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        username: Sequelize.STRING,
        email: Sequelize.STRING,
        phone: Sequelize.INTEGER,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = User;
