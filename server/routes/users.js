const express = require('express');
const { userModel } = require('../models/userModel');

const router = express.Router();

router.get('/authentication', (req, res) => {//use coolie to authorize.
  console.log('********/authentication**********', req.cookies);
  const { userId = 0, cookieToken = '' } = req.cookies;
  const id = Number(userId);
  (async () => {
    const flag = await userModel.find({
      where: { id, cookieToken }
    });
    res.status(200).set('Cache-control', 'no-cache').send(flag ? '1' : '0');
  })();
});

router.post('/sign_up', function (req, res, next) {
  const { nickname, username, password } = req.body;
  (async () => {
    const flag = await userModel.find({
      where: { username }
    });
    if (flag) {
      res.status(200).send({ success: true, code: 1 });//code 1 means username is duplicated.
    } else {
      const result = await userModel.create({
        id: Date.now(),
        nickname,
        username,
        password,
      });
      //insert token and cookie
      const token = Date.now();
      userModel.update(
        {
          cookieToken: `token_${token}`,
        },
        {
          where: { id: result.id }
        }
      );
      res.cookie('userId', result.id, { maxAge: 9000000, httpOnly: true });
      res.cookie('cookieToken', `token_${token}`, { maxAge: 9000000, httpOnly: true });
      //
      res.status(200).send({ success: true, id: result.dataValues.id, code: 0 });
    }
  })();
});
router.post('/login', (req, res, next) => {
  const { username, password, remember } = req.body;
  (async () => {
    const result = await userModel.find({
      where: { username },
    });
    if (!result) {
      res.status(200).send({ success: true, code: 1 });//code 1 means username doesn't exists.
    } else {
      if (result.dataValues.password === password) {
        const { id, nickname } = result.dataValues;

        const token = Date.now();
        userModel.update(
          {
            cookieToken: `token_${token}`,
          },
          {
            where: { id }
          }
        );
        if (remember) {
          res.cookie('userId', id, { maxAge: 9000000, httpOnly: true });
          res.cookie('cookieToken', `token_${token}`, { maxAge: 9000000, httpOnly: true });
        } else {
          res.cookie('userId', id, { httpOnly: true });
          res.cookie('cookieToken', `token_${token}`, { httpOnly: true });
        }
        res.status(200).send({ success: true, code: 0, id, nickname });//code 0 means password is right.
      } else {
        res.status(200).send({ success: true, code: 2 });//code 2 means password is incorrect.
      }
    }
  })();
});
router.get('/logout', (req, res) => {
  const { userId = 0, cookieToken = '' } = req.cookies;
  const id = Number(userId);
  userModel.update(
    {
      cookieToken: '',
    },
    {
      where: { id, cookieToken },
    }
  );
  res.status(200).send({ code: 1 });
});
module.exports = router;
