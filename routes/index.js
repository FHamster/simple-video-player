var express = require('express')
var router = express.Router()
let MyQuery = require('./MySqlInter')

/* GET home page. */
router.get('/viewTest', function (req, res, next) {
  console.log(123)
  res.render('view')
})
router.get('/musicview', function (req, res, next) {
  console.log(123)
  res.render('music')
})
router.get('/viewTest', function (req, res, next) {
  console.log(123)
  res.render('view')
})

router.get('/getTest', function (req, res) {
  res.json({ state: 'GetOK' })
})
router.post('/postTest', (req, res) => {
  res.json({ state: 'PostOK' })
})

router.delete('/deleteTest', (req, res) => {
  res.json({ state: 'DeleteOK' })
})

router.put('/putTest', (req, res) => {
  res.json({ state: 'PutOK' })
})

router.get('/getIDTest/:id', function (req, res) {
  console.log(req.params.id)
  res.json({ state: 'url动态参数测试通过', value: req.params.id })
})

router.get('/sqlTest', (req, res) => {
  MyQuery('select * from test1', (data) => {
    console.log(data)
    res.json(data)
  })
})
module.exports = router
