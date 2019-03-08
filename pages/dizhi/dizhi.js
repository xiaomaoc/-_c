// pages/dizhi/dizhi.js
Page({
  data:{
    dizhi:''
  },
  add: function (options) {
    var di_id = options.currentTarget.id;
    wx.navigateTo({
      url: '../addd_z/addd_z?di_id=' + di_id
    })
  },
  add_xaa: function (options) {
    var di_id = options.currentTarget.id;
    wx.navigateTo({
      url: '../bianjidz/bianjidz?di_id=' + di_id
    })
  },
  xiugaidz: function (options) {
    var odr_id = options.currentTarget.id
    console.log(odr_id)
    wx.navigateTo({
      url: '/pages/dingdan/dingdan?odr_id=' + odr_id
    })
  },
  move: function (options) {
    console.log(options)
    var id = options.currentTarget.id
    var that = this
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getdeleteaddress?id=' + id,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
        })
      }
    })
    this.onLoad()
    // wx.navigateTo({
    //   url: '/pages/dizhi/dizhi'
    // })
  },
  // tabs
  onLoad: function (options) {
    var openid = wx.getStorageSync('openid');
    var that = this
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getaddresslist?openid=' + openid,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        that.setData({
          dizhi: res.data
        })
      }
    })
  },
  // radio: function (e) {
  //   console.log(e)
  //   this.setData({
  //     guige_key02: e.currentTarget.id
  //   })
    // this.data.dizhi[0].check=''
    // console.log(this.data.dizhi)
  // },
  // 发货地址选择,获取用户选择的单选框的值
  // radioChange: function (e) {
  //   console.log(e)
  //   this.setData({
  //     arr_guige02: e.detail.value
  //   })
  //   console.log(e.detail.value)
  // }



  xuanz: function (options){
    var openid = wx.getStorageSync('openid');
    var ts_id = options.currentTarget.id
    var that = this
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getset_places?openid=' + openid + '&ts_id=' + ts_id,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        that.setData({
        })
      }
    })
  }
})