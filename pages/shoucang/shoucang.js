Page({
  onLoad: function () {
    var openid = wx.getStorageSync('openid');
    var that = this
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getcollectlist?openid=' + openid,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        that.setData({
          shoucang: res.data
        })
      }
    })
  },
  move: function (options) {
    console.log(options)
    var data = options.currentTarget.id
    console.log(data)
    var that = this
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getcollectdel?col_id='+ data,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        that.setData({
        })
      }
    })
    this.onLoad();
  },
  xq: function (options) {
    console.log(options.currentTarget.id);
    wx.reLaunch({
      url: '../xiangqing/xiangqing?id=' + options.currentTarget.id
    })
  }
})

