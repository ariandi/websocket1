const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('ppobdbdev', 'ppobuserdev', 'fiora0119', {
//   host: '36.95.58.237',
//   dialect: 'mysql',/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
//   logging: false,
// });

const sequelize = new Sequelize('ari_ppobdb', 'ari_ppobuser', 'fiora123', {
  host: '157.230.43.139',
  dialect: 'mysql',/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  logging: false,
});

const Balances = sequelize.define('balances', {
  // Model attributes are defined here a
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true // Automatically gets converted to SERIAL for postgres
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  balance_total: {
    type: DataTypes.DECIMAL(10, 2)
    // allowNull defaults to true
  },
  first_balance: {
    type: DataTypes.DECIMAL(10, 2)
    // allowNull defaults to true
  },
  last_balance: {
    type: DataTypes.DECIMAL(10, 2)
    // allowNull defaults to true
  },
  active: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  },
  created_by: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  },
  updated_by: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  },
  created_at: {
    type: DataTypes.DATE
    // allowNull defaults to true
  },
  updated_at: {
    type: DataTypes.DATE
    // allowNull defaults to true
  },
}, {
  // Other model options go here
  timestamps: false,
});

module.exports = Balances;
