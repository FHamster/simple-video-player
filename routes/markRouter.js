var express = require('express')
var router = express.Router()
let MyQuery = require('./MySqlInter')



/**
 * /api/mark?{uId=?}
 * 获取用户id为userid的收藏内容
 */
router.get('/mark', (req, res) => {
  let uId = req.query.uId
  console.log(uId)
  res.json(req.query.uId)
})
/**
 * 向收藏夹中新建记录
 * json:{vId:string,uId:string}
 */
router.post('/mark', (req, res) => {
  let data = req.body
  console.log(data.vId)
  console.log(data.uId)
  res.json(data)
})

/**
 * 向收藏夹中删除记录
 */
router.delete('/mark/:markId', (req, res) => {
  let markId = req.params.markId
  console.log(markId)
  res.json(markId)
})

module.exports = router
