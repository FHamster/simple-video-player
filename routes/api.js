var express = require('express')
var router = express.Router()
let MyQuery = require('./MySqlInter')

router.get('/apiTest', function (req, res, next) {
  res.json({ state: true, message: 'api可用' })
})



router.post('/user', (req, res) => {})
module.exports = router
