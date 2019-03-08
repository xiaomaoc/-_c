// pages/yuee/yuee.js
Page({
  onLoad: function (options) {
    var openid = wx.getStorageSync('openid');
    var that = this
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getmoney?openid=' + openid,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        wx.setStorageSync("yue", res.data)
        that.setData({
          yue_a: res.data.money
        })
      }
    })
  },
  tx: function (options) {
    var openid = wx.getStorageSync('openid');
    var that = this
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getmoney?openid=' + openid,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        that.setData({
          moeny: res.data.money
        })
      }
    }),

    wx.navigateTo({
      url: '../tx/tx'
    })
  },
  zhmx: function (options) {
    wx.navigateTo({
      url: '../zhmx/zhmx'
    })
  }
})