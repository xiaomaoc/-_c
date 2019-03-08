
Page({
  data:{
    text:''
  },
  getQrcode() {
    wx.request({
      url: "http://www.zbmall.com/index.php/portal/All/getyaoqing",//域名省略
      data: {
        page: "pages/index/index",
        scene: "83",
        width: 300
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      dataType: 'json',
      success: function (res) {
        console.log(res)
        let qrcodeUrl = res.data;//服务器小程序码地址
      },
      fail: function () { },
      complete: options.complete || function () { }
    })
  },
  onLoad: function (options) {
    // var openid = wx.getStorageSync('openid');
    // var that = this
    // wx.request({
    //   url: 'http://www.zbmall.com/index.php/portal/All/getyaoqing?openid=' + openid,
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   success: function (res) {
    //     console.log(res)
    //     that.setData({
    //       bt: res.data.str
    //     })
    //   }
    // })
    if (options.scene) {
      let scene = decodeURIComponent(options.scene);
      //&是我们定义的参数链接方式
      let userId = options.scene.split("&")[0];
      let recommendId = options.scene.split('&')[1];
      //其他逻辑处理。。。。。
    }
  }
})