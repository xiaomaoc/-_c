// pages/card/card.js
Page({
  onLoad: function (options) {
    //页面初始化 options为页面跳转所带来的参数
    var openid = wx.getStorageSync('openid');
    var that = this
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getcart_list?openid=' + openid,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
         console.log(res)
        // var arr = res.data.ts_place_info
        that.setData({
         card_xax: res.data
        })
        
      }
    })
  },
  addcard: function (options) {
    wx.navigateTo({
      url: '../addcard/addcard'
    })
  },
  tx: function (options) {
    wx.navigateTo({
      url: '../tx/tx?id=' + options.currentTarget.id
    })
  },
  move: function (options){
    console.log(options)
    var id = options.currentTarget.id
    console.log(id)
    var that = this
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getdeletecard?id=' + id,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        // var arr = res.data.ts_place_info
        that.setData({
          cards: res.data
        })

      }
    })
    this.onLoad();
  
  }
  
})