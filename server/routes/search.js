const express = require('express');
const { articleModel } = require('../models/articleModel');
const { userModel } = require('../models/userModel');
const router = express.Router();

const keyword2Array = (queryStr) => {
  let queryArr = queryStr.trim().split(/\s+|-+/g);
  if (queryArr.length > 1) {
    queryArr = [queryStr, ...queryArr];
  }
  return queryArr.map((item) => {
    return { $like: `%${item}%` };
  });
};

router.get('/search', (req, res) => {
  let { keyword, category, page = 0 } = req.query;
  let where = {};
  let filter = [];
  if (keyword) {//以keyword搜索。
    category = undefined;
    filter = keyword2Array(keyword);
    where = {
      articleName: {
        // $or: [
        //   { $like: '%vertical%' },
        //   { $like: '%align%' },
        // ],
        $or: filter,
      },
    };
  } else if (category) {//以分类搜索
    where = {
      category,
    };
  }
  (async () => {
    const articles = await articleModel.findAll({
      attributes: ['articleId', 'authorId', 'articleName', 'description', 'createTime', 'updateTime', 'category'],
      where: {
        // articleName: {
        //   // $or: [
        //   //   { $like: '%vertical%' },
        //   //   { $like: '%align%' },
        //   // ],
        //   $or: filter,
        // },
        ...where,
        finished: true,
      },
      offset: 10 * page,
      limit: 10,
    });
    if (articles.length > 0) {
      const promises = articles.map((article) => {
        return userModel.find({
          attributes: ['id', 'nickname'],
          where: { id: article.authorId },
        });
      });
      Promise.all(promises)
        .then(users => {
          let hash = {};
          let usersWithoutRepeat = users.reduce((preVal, curVal) => {//由对象组成的数组去重
            hash[curVal.id] ? '' : hash[curVal.id] = true && preVal.push(curVal);
            return preVal;
          }, []);
          res.status(200).send({ articles, usersWithoutRepeat, code: 1 });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      res.status(200).send({ code: 0 });//means not found;
    }
  })();
});

module.exports = router;
