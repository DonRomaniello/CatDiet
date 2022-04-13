const Sequelize = require('sequelize')

const db = new Sequelize('dakitties', 'nodeuser', process.env.POSTGRES_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

const Cat = db.define('cat', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

const Weight = db.define('weight', {
  weight: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  }
});

const Food = db.define('food', {
  wellness: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  weruva: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  dry: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  }
});


Cat.hasMany(Weight);
Cat.hasMany(Food);
Food.belongsTo(Cat);
Weight.belongsTo(Cat);


module.exports = {
  db,
  Cat,
  Weight,
  Food
};











module.exports = db


