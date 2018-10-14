//this file defines 'article' model.
const Seq = require('sequelize');
const { db } = require('./base');

const articleModel = db.define(
  'article',
  {
    articleId: {
      type: Seq.BIGINT,//使用BIGINT，防止在用时间戳作为ID的时候报错
      primaryKey: true,
      // autoIncrement: true,
    },
    articleName: {
      type: Seq.STRING,
    },
    articleContent: {
      type: Seq.TEXT({ length: 'long' }),
    },
    notebookId: {
      type: Seq.BIGINT,
    },
    authorId: {
      type: Seq.BIGINT,
    },
    description: {
      type: Seq.TEXT({ length: 'long' }),
    },
    category: {
      type: Seq.STRING,
    },
    publishSite: {
      type: Seq.STRING,
    },
    finished: {
      type: Seq.BOOLEAN,
    },
    createTime: {
      type: Seq.STRING,
    },
    updateTime: {
      type: Seq.STRING,
    }
  },
);
articleModel.sync();

module.exports = { articleModel };