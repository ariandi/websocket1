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

const PdamDataDetail = sequelize.define('pdam_data_details', {
  // Model attributes are defined here a
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true // Automatically gets converted to SERIAL for postgres
  },
  pdam_data_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  billing_id: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  trx_tgl: {
    type: DataTypes.DATEONLY
    // allowNull defaults to true
  },
  trx_time: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  trx_sign: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  cust_name: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  cust_addr: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  group_rate: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  group_rate_des: {
    type: DataTypes.STRING
  },
  unit: {
    type: DataTypes.STRING
  },
  bill_amount_sum: {
    type: DataTypes.DECIMAL(10, 2)
  },
  penalty_sum: {
    type: DataTypes.DECIMAL(10, 2)
  },

  add_amount_sum: {
    type: DataTypes.DECIMAL(10, 2)
  },
  bill_settl_sum: {
    type: DataTypes.DECIMAL(10, 2)
  },
  adm_charge_sum: {
    type: DataTypes.DECIMAL(10, 2)
  },
  bill_repeat: {
    type: DataTypes.INTEGER
  },
  data_detail: {
    type: DataTypes.STRING
  },

  created_at: {
    type: DataTypes.DATE
  },
  updated_at: {
    type: DataTypes.DATE
  },
  data_detail_pay: {
    type: DataTypes.STRING
  },
  req_inq: {
    type: DataTypes.STRING
  },
  req_pay: {
    type: DataTypes.STRING
  },
}, {
  // Other model options go here
  timestamps: false,
});

module.exports = PdamDataDetail;
