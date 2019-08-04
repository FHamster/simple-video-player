var express = require('express')
var router = express.Router()
let MyQuery = require('./MySqlInter')


router.get('/video/:vId', (req, res) => {
  let vId = req.params.vId
  console.log(vId)
  res.json(vId)
})

router.get('/video', (req, res) => {
  res.json([123,123,123,123,123])
})


module.exports = router
