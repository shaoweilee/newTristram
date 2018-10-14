const express = require('express');
const { notebookModel } = require('../models/notebookModel');
const { articleModel } = require('../models/articleModel');
const { userModel } = require('../models/userModel');
const router = express.Router();

const { log } = console;


router.get('/getNotes', (req, res) => {
  const { userId, cookieToken: req_cookieToken } = req.cookies;
  console.log('*******/getNotes*******userId', userId);
  const id = Number(userId);
  (async () => {
    // const { cookieToken: db_cookieToken } = await userModel.find({
    //   where: { id }
    // });
    // if (req_cookieToken === db_cookieToken) {
    const [notebooks, articles] = await Promise.all([
      notebookModel.findAll({
        attributes: ['notebookId', 'notebookName'],
        where: { authorId: id }
      }),
      articleModel.findAll({
        attributes: ['notebookId', 'articleId', 'articleName'],
        where: { authorId: id }
      })
    ]);
    res.status(200).send({ success: true, notebooks, articles });//权限认证通过
    // } else {
    //   res.status(200).send({ success: true, code: 0 });//权限认证不通过
    // }
  })();
});

router.post('/saveNotebook', function (req, res, next) {
  const { notebookName } = req.body;
  const { userId: authorId } = req.cookies;
  (async () => {
    const flag = await notebookModel.find({
      attributes: ['authorId', 'notebookName'],
      where: { authorId, notebookName }
    });
    log(flag);
    if (flag) {
      res.status(200).send({ success: true, code: 1 });//duplicated notebookName for this user.
    } else {
      const result = await notebookModel.create({
        notebookId: Date.now(),
        notebookName,
        articles: JSON.stringify([]),
        authorId,
      });
      res.status(200).send({ success: true, notebookId: result.dataValues.notebookId, code: 0 });//successfully created noteBook in database for this user.
    }
  })();
});

module.exports = router;