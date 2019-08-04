var express = require('express')
var router = express.Router()
let MyQuery = require('./MySqlInter')

/**
* 根据视频Id查找视频信息
 */
router.get('/video/:vId', (req, res) => {
  let vId = req.params.vId;
  console.log(vId);
  res.json(vId);
  let sql = `select * from video where v_Id = '${v_Id}'`;
  console.log(sql);

  //数据库验证
  MyQuery(sql, data => {
    console.log(`data is ${data[0]}`);
    if(data.length > 0){
      res.json(data[0]);
    } else {
      res.json({state: false, msg: '没有查询到该视频信息' });
    }
  });
});

/**
* 显示所有视频信息
 */
router.get('/video', (req, res) => {
  let sql = `select * from video`;
  console.log(sql);

  MyQuery(sql, data => {
    console.log(`data is ${data[0]}`);
    if(data.length > 0){
      res.json(data[0]);
    } else {
      res.json({state: false, msg: '没有查询到视频' });
    }
  });
});

module.exports = router
