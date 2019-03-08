Page({
  onLoad: function (options) {
    var openid = wx.getStorageSync('openid');
    var that = this
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/zhanghudetial?openid=' + openid,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        that.setData({
          bzhmx_b: res.data.order
        })
      }
    })
  }
})
