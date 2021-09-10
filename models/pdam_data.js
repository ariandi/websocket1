const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('ppobdbdev', 'ppobuserdev', 'fiora0119', {
  host: '36.95.58.237',
  dialect: 'mysql',/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  logging: false,
});

const PdamData = sequelize.define('pdam_data', {
  // Model attributes are defined here a
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true // Automatically gets converted to SERIAL for postgres
  },
  ca_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ret_num: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  product_id: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  },
  trx_flow: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  },
  rcode: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  rcode_desc: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  txid: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  txid2: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  type: {
    type: DataTypes.INTEGER
  },
  fortuna_reff: {
    type: DataTypes.STRING
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

module.exports = PdamData;
