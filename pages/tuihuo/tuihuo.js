Page({
  onLoad: function () {
    var openid = wx.getStorageSync('openid');
    var that = this
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/tuihuo?openid=' + openid,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        that.setData({
          tuihuo: res.data
        })
      }
    })
  },
    xiangq: function (options) {
    console.log(options)
    var order_id = options.currentTarget.id
    wx.navigateTo({
      url: '../xiangq/xiangq?id=' + options.currentTarget.id
    })
  },
})