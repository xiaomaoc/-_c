// pages/order/order.js
Page({
  data: {
    //tab框
    selected: 0,
    list: ['全部', '待付款', '待发货', '待收货','已完成']
  },
  //tab框
  selected: function (e) {
    let that = this
    let index = e.currentTarget.dataset.index
    if (index == 0) {
      that.setData({
        selected: 0
      })
    } else if (index == 1) {
      that.setData({
        selected: 1
      })
    } else if (index == 2) {
      that.setData({
        selected: 2
      })
    } else if (index == 3) {
      that.setData({
        selected: 3
      })
    }else{
      that.setData({
        selected: 4
      })
    }
  },
  onLoad: function (options) {
    //页面初始化 options为页面跳转所带来的参数
    var openid = wx.getStorageSync('openid');
    var that = this
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getorder_list?&openid=' + openid,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        that.setData({
          order: res.data.alldata,
          order_one: res.data.ndata,
          order_to: res.data.ydata,
          order_san: res.data.dsdata,
          order_for: res.data.wcdata
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
  // 取消订单
  move: function (options) {
    console.log(options)
    var ord_id = options.currentTarget.id
    var that = this
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getdelord?ord_id=' + ord_id,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        that.setData({
        })
      }
    })
    this.onLoad()
  },
  // 确认收货
  queren: function (options) {
    console.log(options)
    var order_id = options.currentTarget.id
    var openid = wx.getStorageSync('openid');
    var that = this
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getorderwc?order_id=' + order_id + '&openid=' + openid,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        that.setData({
        })
      }
    })
    this.onLoad()
  },
  tuihuo: function (options) {
    console.log(options)
    var order_id = options.currentTarget.id
    var openid = wx.getStorageSync('openid');
    var that = this
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getorderwc?order_id=' + order_id + '&openid=' + openid,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        that.setData({
        })
      }
    })
    this.onLoad()
  },
})
