let mysqlDriver = require('mysql')

let pool = mysqlDriver.createPool(
  {
    host: '114.116.39.130',
    user: 'root',
    password: 'Gaoxin459716010@163',
    database: 'video'
  }
)

/**
 * @param sqlSta 传入的sql语句 静态的
 * @callback success(result) 查询成功回调函数
 * result 为查询结果
 */
module.exports = MyQuery = function (sqlSta, success) {
  pool.getConnection((err, connect) => {
    if (err) {
      console.log(err)
    } else {
      // console.log(connect)
      connect.query(sqlSta, (error, result) => {
        if (error) throw error
        if (success) success(result)
      })

    }
  })
}

