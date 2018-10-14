const express = require('express');
const path = require('path');
const fsPromise = require('fs').promises;
const { articleModel } = require('../models/articleModel');
const { userModel } = require('../models/userModel');
const router = express.Router();

router.get('/getList', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/api/headerList.json'));
});
router.get('/morehomelist', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/api/morehomelist.json'));
});
router.get('/homeArticles', (req, res) => {
  const { page = 0 } = req.query;
  let topicPromise = Promise.resolve();
  if (page == 0) {
    topicPromise = fsPromise.readFile(path.join(__dirname, '../public/api/homeTopic.json'));//读取topic文件，包含话题和轮播图数据。
  }
  (async () => {
    const articles = await articleModel.findAll({
      attributes: ['articleId', 'authorId', 'articleName', 'description', 'createTime', 'updateTime'],
      where: { finished: true, },
      offset: 4 * page,
      limit: 4,
    });
    if (articles.length > 0) {
      const promises = articles.map((article) => {
        return userModel.find({
          attributes: ['id', 'nickname'],
          where: { id: article.authorId },
        });
      });
      promises.push(topicPromise);//读取topic的操作混入其中！
      Promise.all(promises)
        .then(users => {
          let topic = users.pop();//取出读取到的topic文件。目前是Buffer。
          let focusImg = undefined;
          if (topic) {
            const topicObj = JSON.parse(topic.toString());
            topic = topicObj.topicList;
            focusImg = topicObj.focusImg;
          }
          let hash = {};
          let usersWithoutRepeat = users.reduce((preVal, curVal) => {//由对象组成的数组去重，已经去除掉了最后一个。
            hash[curVal.id] ? '' : hash[curVal.id] = true && preVal.push(curVal);
            return preVal;
          }, []);
          // const articlesWithNickname = articles.map((article) => {
          //   const author = usersWithoutRepeat.find(({ id }) => id === article.authorId);
          //   return { ...article, nickname: author.nickname };
          // });
          res.status(200).send({ code: 1, articles, users: usersWithoutRepeat, topic, focusImg });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      res.status(200).send({ code: 0 });//means not found;
    }
  })();
  // res.status(200).sendFile(path.join(__dirname, '../public/api/homeData.json'));
});

module.exports = router;