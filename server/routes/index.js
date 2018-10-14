const express = require('express');
const { articleModel } = require('../models/articleModel');
const { userModel } = require('../models/userModel');
const path = require('path');
const router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile(path.resolve(__dirname, '../public/dist/index.html'));
});
router.get('/detail/:id', function (req, res, next) {
  res.sendFile(path.resolve(__dirname, '../public/dist/detail.html'));
});
router.get('/search', function (req, res, next) {
  res.sendFile(path.resolve(__dirname, '../public/dist/search.html'));
});

router.get('/getDetail', (req, res) => {
  const { articleId } = req.query;
  (async () => {
    const article = await articleModel.find({
      where: { articleId },
    });
    if (article && article.finished) {
      const author = await userModel.find({
        where: { id: article.authorId },
      });
      res.status(200).send({ code: 1, article, author });
    } else {
      res.status(200).send({ code: 0 });
    }
  })();
});
module.exports = router;
