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

const BalanceDetails = sequelize.define('balance_details', {
  // Model attributes are defined here a
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true // Automatically gets converted to SERIAL for postgres
  },
  balance_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  va_id: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  },
  balance: {
    type: DataTypes.DECIMAL(10, 2)
    // allowNull defaults to true
  },
  balance_type: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  },
  date: {
    type: DataTypes.DATEONLY
    // allowNull defaults to true
  },
  txid: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  status: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  },
  active: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  },
  product_id: {
    type: DataTypes.INTEGER
  },
  product_name: {
    type: DataTypes.STRING
  },
  fee_loket: {
    type: DataTypes.DECIMAL(10, 2)
  },
  fee_agen: {
    type: DataTypes.DECIMAL(10, 2)
  },
  admin_fee: {
    type: DataTypes.DECIMAL(10, 2)
  },
  pinalty_fee: {
    type: DataTypes.DECIMAL(10, 2)
  },
  additional_fee: {
    type: DataTypes.DECIMAL(10, 2)
  },
  settle_fee: {
    type: DataTypes.DECIMAL(10, 2)
  },
  deposit_img: {
    type: DataTypes.STRING
  },
  req_count: {
    type: DataTypes.INTEGER
  },
  first_balance: {
    type: DataTypes.DECIMAL(10, 2)
  },
  last_balance: {
    type: DataTypes.DECIMAL(10, 2)
  },
  biller_status: {
    type: DataTypes.INTEGER
  },
  created_by: {
    type: DataTypes.INTEGER
  },
  updated_by: {
    type: DataTypes.INTEGER
  },
  created_at: {
    type: DataTypes.DATE
  },
  updated_at: {
    type: DataTypes.DATE
  },
}, {
  // Other model options go here
  timestamps: false,
});

module.exports = BalanceDetails;
