//this file defines 'notebook' model.
const Seq = require('sequelize');
const { db } = require('./base');

const notebookModel = db.define(
  'notebook',
  {
    notebookId: {
      type: Seq.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    notebookName: {
      type: Seq.STRING,
    },
    articles: {
      type: Seq.STRING,
    },
    authorId: {
      type: Seq.BIGINT,
    },
    authorNickname: {
      type: Seq.STRING,
    },
    finished: {
      type: Seq.BOOLEAN,
    }

  },
);
notebookModel.sync();

module.exports = { notebookModel };