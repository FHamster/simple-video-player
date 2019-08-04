var express = require('express')
var router = express.Router()
let MyQuery = require('./MySqlInter')

/**
 * 获取用户认证标识完成登录
 */
router.post('/auth', (req, res) => {
  //let 和 var 都是生命变量的意思
  //但是let对变量的安全要求更高建议使用let
  let data = req.body
  console.log(data)
  let uId = req.body.uId
  let psw = req.body.psw
  //这边这个是字符串模板的符号，在键盘左上角 就是括号里这个（`）
  let sql = `select * from user where u_id = '${uId}' and u_psw = '${psw}'`
  console.log(sql)

  //数据库认证
  //data为数据库返回的结果集
  //success回调函数不管叫不叫data都会返回结果集
  //所以不管叫data还是result都可以
  //回调函数可以填入的函数有以下几种形式
  //1 箭头函数
  // MyQuery(sql, data => {{执行代码})
  //2匿名函数对象
  // MyQuery(sql, function(data){执行代码})
  //3函数对象
  //var fun=function(data){执行代码}
  // MyQuery(sql, fun)
  //虽然有细微的区别但是第一种比较好用推荐使用，看着简洁

  MyQuery(sql, data => {
    //data是一个数组，使用数组的访问方式访问
    //有问题多多console.log()
    console.log(`data is ${data[0]}`)

    //根据结果集的长度判断用户登录是否成功
    if (data.length > 0) {
      // res.redirect('https://www.baidu.com/')
      //认证成功
      //返回json对象给前台
      res.json({ state: true, message: '用户认证通过' })
    } else {
      //认证失败
      res.json({ state: false, message: '用户认证未能通过' })
    }
  })
})

/**
 * 用户注册，向后台提交新用户数据
 */
router.post('/user', (req, res) => {
  let uNickname = req.body.uNickname
  let uPsw = req.body.uPsw

  // let sql = `inser into user where u_id = '${uId}' and u_psw = '${psw}'`
  // let sql
  console.log(uNickname)

  //数据库认证
  MyQuery(sql, data => {
    console.log(`data is ${data[0]}`)

    if (data.length > 0) {
      //认证成功
      res.json({ state: true, message: '用户注册成功' })
      // res.location('https://www.baidu.com/')
    } else {
      //认证失败
      res.json({ state: false, message: '用户注册失败' })
    }

  })

})
/**
 * 根据id获取用户信息
 */
router.get('/user/:uId', (req, res) => {
  let uId = req.params.uId
  console.log(uId)
  let sql = `select * from user where u_id = '${uId}'`
  console.log(sql)

  //数据库认证
  MyQuery(sql, data => {
    console.log(`data is ${data[0]}`)

    //细节问题返回数据给前台之前应该把敏感字段置空
    data[0].u_psw = null

    if (data.length > 0) {
      //认证成功
      res.json(data[0])
      // res.location('https://www.baidu.com/')
    } else {
      //认证失败
      res.json({ state: false, message: '没有查询到该用户' })
    }

  })
})

module.exports = router
let test = [
  { mId: '123', mUrl: 'http://123', mTotalLong: 'lo213123ng' },
  { mId: '123', mUrl: 'http://123', mTotalLong: 'lo213123ng' },
  { mId: '123', mUrl: 'http://123', mTotalLong: 'lo213123ng' },
  { mId: '123', mUrl: 'http://123', mTotalLong: 'lo213123ng' }
]
