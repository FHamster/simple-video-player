var express = require('express')
var router = express.Router()
let MyQuery = require('./MySqlInter')

/**
 * 根据音乐id获取歌曲信息
 */
router.get('/music/:mId', (req, res) => {
    let mId = req.params.mId;
    console.log(mId);
    // res.json(mId);
    let sql = `select * from music where m_id = '${mId}'`;
    console.log(sql);

    //数据库匹配认证
    MyQuery(sql, data => {
        console.log(`data is ${data[0]}`);
        if(data.length > 0) {
            //匹配成功并返回数据
            res.json(data[0]);
        } else {
            //匹配失败
            res.json({state: false, msg: '没有查询到该歌曲'});
        }
    });
});

/**
  *显示全部歌曲信息
 */
router.get('/music', (req, res) => {
    let sql = `select * from music`;
    console.log(sql);

    //数据库认证
    MyQuery(sql, data => {
        console.log(`data is ${data[0]}`);
        if(data.length > 0) {
            //获取成功并返回数据
            res.json(data[0]);
        } else {
            //匹配失败
            res.json({state: false, msg: '没有查询到歌曲信息'});
        }
    });
});

module.exports = router;
