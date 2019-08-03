var express = require('express')
var router = express.Router()
let MyQuery = require('./MySqlDao')

router.get('/', function (req, res, next) {
  res.josn({ state: true, message: 'api可用' })
})

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.get('/getTest', function (req, res) {
  res.json({ state: 'GetOK' })
})

router.get('/getIDTest/:id', function (req, res) {
  console.log(req.params.id)
  res.json({ state: req.params.id })
})

router.post('/postTest', (req, res) => {
  res.json({ state: 'PostOK' })
})

router.delete('/deleteTest', (req, res) => {
  res.json({ state: 'DeleteOK' })
})

router.put('/putTest', (req, res) => {
  res.json({ state: 'PatchOK' })
})
module.exports = router
