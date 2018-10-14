const express = require('express');
const formidable = require('formidable');
const fsPromise = require('fs').promises;
const path = require('path');
const config = require('../config/index');
const router = express.Router();

router.post('/', (req, res) => {
  const form = new formidable.IncomingForm();
  const newPaths = [];
  const promises = [];
  const uploadDir = path.resolve(__dirname, config.serverImgUploadDir);
  form.uploadDir = config.env === 'production' ? uploadDir : config.localDevImgUploadDir;
  form.parse(req, (err, fields, files) => {
    for (const key in files) {
      if (files.hasOwnProperty(key)) {
        const file = files[key];
        const oldPath = file.path;
        const newPath = file.path + '_' + file.name;
        newPaths.push(newPath);
        promises.push(fsPromise.rename(oldPath, newPath));
        // fsPromise.rename(oldPath, newPath)
        //   .then(() => {
        //     // http://localhost:5499/static    /upload/imgs/upload_078e7e90c202c60f1eca3540acc31a59_defineproperty.png
        //     // public                          \upload\imgs\upload_defb35bb69fd295afe46135496907693_defineproperty.png
        //     const urlPath = newPath.replace('public', 'http://localhost:5499/static');
        //     urls.push(urlPath);
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   });
      }
    }
    Promise.all(promises)
      .then(() => {
        const urlPaths = newPaths.map((newPath) => {
          return newPath.replace(config.env === 'production' ? config.serverImgUploadReplace : config.localDevImgUploadReplace, 'http://www.herosanctuary.com/static').replace(/\\/g, '/');
          // return path.normalize(newPath.replace('public', 'http://localhost:5499/static'));
        });
        console.log(urlPaths);
        res.status(200).send({ errno: 0, data: urlPaths });
      })
      .catch(err => {
        console.log(err);
        res.status(200).send({ errno: 1, data: [] });
      });
  });
});

module.exports = router;
