var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  var sample = {
    title: 'json test',
  }
  res.json(sample)
})

module.exports = router
