const express = require('express');
const history = require('connect-history-api-fallback');//解决spa二级路由刷新后404的问题。
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
const notebookRouter = require('./routes/notebooks');
const articleRouter = require('./routes/articles');
const uploadRouter = require('./routes/upload');
const apiRouter = require('./routes/apis');
const searchRouter = require('./routes/search');

const { articleModel } = require('./models/articleModel');

const app = express();
app.use(history({
  verbose: true,
  index: '/',
}));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://192.168.1.110:1001');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

const jsonParser = bodyParser.json();
app.use(jsonParser);
app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/user', userRouter);
app.use('/write', [notebookRouter, articleRouter]);
app.use('/upload', uploadRouter);
app.use('/search', searchRouter);

const server = app.listen(5499, function () {
  const port = server.address().port;
  console.log(`服务器在${port}端口运行！`);
});

// (async () => {
//   const result = await articleModel.find({
//     where: { articleName: { $like: '%哈%' } },
//   });
//   console.log(result);
// })();