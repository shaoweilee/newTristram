//这个文件连接数据库，导出数据库。
const Seq = require('sequelize');
const { dbPassword } = require('../config');
const db = new Seq(
  'my_db',
  'root',
  dbPassword,
  {
    dialect: 'mysql',
    host: 'localhost',
    port: '3306',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    define: {
      freezeTableName: true,
      timestamps: false,
      charset: 'utf8',
    },
  }
);

module.exports = { db };