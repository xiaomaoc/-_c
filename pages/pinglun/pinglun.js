// pages/order/order.js
Page({
  data: {
    //tab框
    selected: 0,
    list: ['全部', '待评价', '已评价']
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
    } else {
      that.setData({
        selected: 2
      })
    }
  },
  onLoad: function (options) {
    //页面初始化 options为页面跳转所带来的参数
    var openid = wx.getStorageSync('openid');
    var that = this
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getcomment_list?openid=' + openid,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        that.setData({
          all: res.data.qcom,
          daipj: res.data.ncom,
          yipj: res.data.ycom
        })
      }
    })
  },
  bindTextAreaBlur: function (e) {
    this.setData({
      concent: e.detail.value,
    })
  },
  fabiao: function (e) {
    console.log(e)
    var order_id = e.detail.target.id
    var openid = wx.getStorageSync('openid')
    var that = this
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getordermsg?msg=' + this.data.concent + '&openid=' + openid + '&order_id=' + e.detail.target.id,
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
    this.setData({
      focus: 'false',
      concent1: this.data.concent,
    })
    console.log(this.data.concent)
  }
})
