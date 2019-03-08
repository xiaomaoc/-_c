Page({
  data:{
    showView_a: true
  },
  onLoad: function (options) {
    showView_a: (options.showView_a == "true" ? true : false)
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
          bzhmx_a: res.data.deteil,
          bzhmx_b: res.data.order,
          money: res.data.money
        })
      }
    })
  },
  shouru: function (options) {
    wx.navigateTo({
      url: '../zhmx_s/zhmx_s'
    })
  },
  zhichu: function (options) {
    wx.navigateTo({
      url: '../zhmx_ss/zhmx_ss'
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
  card_xxa: function (options) {
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