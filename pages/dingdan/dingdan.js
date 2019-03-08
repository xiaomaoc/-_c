//index.js
//获取应用实例

Page({
  data:{
    xq:'',
    xqs:'',
    addr:'',
    adr_id:'',
    ts_id:''
  },
  onLoad: function (options) {
    console.log(options)
    var xq = wx.getStorageSync('xiangqing')
    var adrr_id = options.odr_id 
    var openid = wx.getStorageSync('openid');
    var that = this;
    var is_get = false;
    that.setData({
      xq: xq
    })
    if (adrr_id>0){
      that.setData({
        adr_id: adrr_id,
      })
      var is_get=true
    }
    if(is_get){
      wx.request({
        url: 'http://www.zbmall.com/index.php/portal/All/getadr',
        data: { 'adrr_id': adrr_id },
        headers: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          console.log(res)
          if (res) {
            that.setData({ addr: res.data })
          }
        }
      })
    }else{
      wx.request({
        url: 'http://www.zbmall.com/index.php/portal/All/getadr_info',
        data: { 'openid': openid },
        headers: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          console.log(res)
          if (res) {
            that.setData({ 
              addr: res.data, 
              ts_id:res.data.ts_id
              })
          }
        }
      })
    }
  },
  zhifu: function (options){
    var that = this;
    var adrr_id = options.odr_id
    var xqs = wx.getStorageSync('xiangqing')
    that.setData({
      xqs: xqs[0].goods_num
    })
    var openid = wx.getStorageSync('openid');
    var goods_id = wx.getStorageSync('id');
    console.log(goods_id)
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getorderpush',
      data: { 
        'goods_id': goods_id,
         'openid':openid,
         'ts_id':this.data.ts_id,
        'num': xqs[0].goods_num
      },
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
          that.setData({ 
            addr: res.data
            
          })
      }
    })
  },
  dizhi: function (options) {
    wx.navigateTo({
      url: '../dizhi/dizhi'
    })
  }
  // xiangqing: function (options) {
  //   var that = this;
  //   var openid = wx.getStorageSync('openid');
  //   var id = wx.getStorageSync('id');
  //   wx.request({
  //     url: 'http://www.zbmall.com/index.php/portal/All/getgood_info',
  //     data: {
  //       'id': id,
  //       'openid': openid,
  //     },
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     success: function (res) {
  //       console.log(res)
  //       that.setData({
  //       })
  //     }
  //   })
  //   wx.navigateTo({
  //     url: '../xiangqing/xiangqing'
  //   })
  // }
})
