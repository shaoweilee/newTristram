//这个文件定义user模型。
const Seq = require('sequelize');
const { db } = require('./base');

const userModel = db.define(
  'user',
  {
    id: {
      type: Seq.BIGINT,
      primaryKey: true,
      autoIncrement: true,//如果新创建的表没有手动指定过ID，此选项会给数据自动分配ID。如果手动指定过ID，那么此选项就会失效。总之就是，要指定ID就总是指定；不手动指定的话，就一直用这个选项就行了。
    },
    username: {
      type: Seq.STRING,
    },
    password: {
      type: Seq.STRING,
    },
    nickname: {
      type: Seq.STRING,
    },
    cookieToken: {
      type: Seq.STRING,
    }
  },
);
userModel.sync();

module.exports = { userModel };