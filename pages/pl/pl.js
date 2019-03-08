Page({
  sys: function (options) {
    wx.switchTab({
      url: '/pages/index/index',
    });
  },
  car: function (options) {
    wx.switchTab({
      url: '/pages/cart/cart'
    })
  },
  shoucang: function (options) {
    wx.navigateTo({
      url: '../shoucang/shoucang'
    })
  }
})