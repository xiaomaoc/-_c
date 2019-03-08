// const AV = require('../../utils/av-weapp.js')
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
var qqmapsdk;
Page({
  data: {
    showView_a: true
  },
  switch1Change(e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  isDefault: false,
  formSubmit: function (e) {
    // user 
    // var user = AV.User.current();
    // detail
    var detail = e.detail.value.detail;
    // realname
    var realname = e.detail.value.realname;
    var mobile = e.detail.value.mobile;
    var openid = wx.getStorageSync('openid');
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getaddplace?openid=' + openid,
      data: {
        'detail': e.detail.value.detail,
        'realname': e.detail.value.realname,
        'mobile': e.detail.value.mobile,
        'str': this.data.str
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
      }
    })
    // 表单验证
    if (realname == '') {
      wx.showToast({
        title: '请填写收货人'
      });
      return;
    }
    if (!(/^1[34578]\d{9}$/.test(mobile))) {
      wx.showToast({
        title: '请填写正确手机号码'
      });
      return;
    }
    if (this.data.areaSelectedStr == '请选择省市区') {
      wx.showToast({
        title: '请输入区域'
      });
      return;
    }
    if (detail == '') {
      wx.showToast({
        title: '请填写详情地址'
      });
      return;
    }
    wx.navigateTo({
      url: '../dizhi/dizhi'
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
  },
  onLoad: function (options) {
    showView_a: (options.showView_a == "true" ? true : false)
    //页面初始化 options为页面跳转所带来的参数
    var openid = wx.getStorageSync('openid');
    var id = options.di_id    //获取值
    wx.setStorageSync("ts_id", options.di_id)
    var that = this
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getplace_info?id=' + id + '&openid=' + openid,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          ts_name: res.data.ts_name,
          ts_phone: res.data.ts_phone,
          ts_address: res.data.ts_address
        })
      }
    })
  },
  data: {
    countryIndex: 6,
    // 省市区三级联动初始化
    region: ["广东省", "广州市", "天河区"],
    str: '',
    ts_name: '',
    ts_phone: '',
    ts_address: ''
    // ts_place_info:[]
  },
  // 选择省市区函数
  changeRegin(e) {
    var str = ''
    str = e.detail.value[0] + e.detail.value[1] + e.detail.value[2]
    this.setData({ region: e.detail.value, str: str });
  }
})