$(function () {
  //请求参数
  $.ajax({
    //请求方式
    type: 'POST',//post get delete put
    //请求的媒体类型
    contentType: 'application/json;charset=UTF-8',
    //请求地址
    url: 'http://127.0.0.1/admin/list/',
    //数据，json字符串
    data: { asd: 123},
    //请求成功回调函数
    success: function (result) {
      console.log(result)
    },
    //请求失败回调函数
    error: function (e) {
      console.log(e.status)
      console.log(e.responseText)
    }
  })
})
