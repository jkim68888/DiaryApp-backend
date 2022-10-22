var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  var sample = {
    title: 'title',
    body: 'body is ...',
  }
  res.json(sample)
})

module.exports = router
