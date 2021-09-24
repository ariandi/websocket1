require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
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
