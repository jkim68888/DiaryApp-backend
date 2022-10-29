var express = require('express')
const { default: checkToken } = require('../../lib/checkToken')
var router = express.Router()
var image = require('./image.ctrl')
const multer = require('multer')

const storage  = multer.diskStorage({ // 2
    destination(req, file, cb) {
      cb(null, 'public/images/');
    },
    filename(req, file, cb) {
      cb(null, `${Date.now()}__${file.originalname}`);
    },
  });

const upload = multer({ storage: storage }); // 3-2


/* GET image page. */
router.post('/list', checkToken, image.upload)

module.exports = router
