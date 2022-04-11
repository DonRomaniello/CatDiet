const Sequelize = require('sequelize')

const db = new Sequelize('database', process.env.MARIADBLOGIN, 'password', {
  dialect: 'mariadb',
  dialectOptions: {
    // Your mariadb options here
    // connectTimeout: 1000
  }
});

module.exports = db
