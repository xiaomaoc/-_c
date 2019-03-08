Page({
  data:{
    showView_a: true
  },
  onLoad: function (options) {
    showView_a: (options.showView_a == "true" ? true : false)
    var order_id = options.id    //获取值
    var openid = wx.getStorageSync('openid');
    var that = this
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getorderinfo?order_id=' + order_id + '&openid=' + openid,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        that.setData({
          xq: res.data
        })
      }
    })
  },
  // tab
    tabs: function () {
    var that = this
    that.setData({
      showView_a: (!that.data.showView_a)
    })
  },
  shouye: function (options) {
    wx.switchTab({
      url: '/pages/index/index',
    });
  },
  card: function (options) {
    wx.switchTab({
      url: '/pages/cart/cart'
    })
  },
  wode: function (options) {
    wx.switchTab({
      url: '/pages/personal/personal'
    })
  }
})