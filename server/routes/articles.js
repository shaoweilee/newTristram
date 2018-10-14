const express = require('express');
const { notebookModel } = require('../models/notebookModel');
const { articleModel } = require('../models/articleModel');
const router = express.Router();

router.post('/saveArticle', (req, res) => {
  const { userId: authorId } = req.cookies;
  const time = Date.now();
  (async () => {
    const { articleId } = await articleModel.create({ articleId: time, createTime: new Date().toLocaleString(), authorId, ...req.body });
    const articles = await articleModel.findAll({
      where: {
        authorId,
      },
    });
    res.status(200).send({ success: true, code: 0, articles, articleId });
  })();
});
router.post('/autoSave', (req, res) => {
  const { userId: authorId } = req.cookies;
  const { articleContent, articleId, articleName, updateType } = req.body;
  const updateTime = new Date().toLocaleString();
  (async () => {
    const flag = await articleModel.find({
      attributes: ['articleId'],
      where: { articleId },
    });
    if (flag) {
      await articleModel.update(
        {
          [updateType]: req.body[updateType],
          updateTime,
        },
        {
          where: { articleId }
        }
      );
      res.status(200).send({ success: true, code: 1 });//code 1 means article updated successfully.
    } else {
      res.status(200).send({ success: true, code: 0 });//code 0 means article doesn't exist.
    }
  })();
});
router.get('/getDetail', (req, res) => {
  const { articleId } = req.query;
  (async () => {
    const article = await articleModel.find({
      where: { articleId },
    });
    res.status(200).send({ success: true, article });
  })();
});

router.post('/publish', (req, res) => {
  const { articleId, articleName, class: category, description } = req.body;
  const publishSite = `/detail/${articleId}`;
  (async () => {
    await articleModel.update(
      {
        articleName,
        description,
        category: category.join('-'),
        publishSite,
        finished: true,
      },
      {
        where: { articleId }
      }
    );
    res.status(200).send({ publishSite });
  })();
});

router.get('/delArticle', (req, res) => {
  const { userId: requestUserId } = req.cookies;
  const { articleId, notebookId } = req.query;
  (async () => {
    const { authorId } = await articleModel.find({
      attributes: ['articleId', 'authorId'],
      where: { articleId },
    });
    if (requestUserId == authorId) {
      //发出删除请求的是作者本人
      articleModel.destroy({
        where: { articleId },
      });
      if (notebookId) {
        notebookModel.destroy({
          where: { notebookId },
        });
      }
      res.status(200).send('OK');
    } else {
      res.status(200).send('别想干坏事儿！');
    }
  })();
});
module.exports = router;
