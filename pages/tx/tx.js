// pages/tx/tx.js
Page({
  data:{
    showView_a: true,
    yue:'',
    addr: '',
    adr_id: ''
  },
  onLoad: function (options) {
    showView_a: (options.showView_a == "true" ? true : false)
    //页面初始化 options为页面跳转所带来的参数
    var yue = wx.getStorageSync('yue')
    console.log(yue)
    var openid = wx.getStorageSync('openid');
    var is_get = false;
    var id = options.id    //获取值
    wx.setStorageSync("id", options.id )
    console.log(id)
    var that = this
    that.setData({
      yue: yue.money,
      qian: yue.set[0].fee
    })
    if (id > 0) {
      that.setData({
        id: id,
      })
      var is_get = true
    }
    if (is_get) {
      wx.request({
        url: 'http://www.zbmall.com/index.php/portal/All/getuserbank',
        data: { 'id': id },
        headers: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          console.log(res)
          if (res) {
            that.setData({ addr: res.data.banks})
          }
        }
      })
    } else {
      wx.request({
        url: 'http://www.zbmall.com/index.php/portal/All/getmoney',
        data: { 'openid': openid },
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
    }
  },
  formSubmit: function (e) {
    console.log(e)
    var id = wx.getStorageSync('id');
    var money = e.detail.value.money;
    var cart = e.detail.value.cart;
    var openid = wx.getStorageSync('openid');
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/gettixians?openid=' + openid,
      data: {
        'money': e.detail.value.money,
        'bank_id':id
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //console.log(res.data)
      }
    })
    // 表单验证
    var yue = wx.getStorageSync('yue')
    console.log(yue)
    var that = this
    that.setData({
      min: yue.set[0].min,
      max: yue.set[0].max,
    })
    console.log(yue.set[0].min)
    if (money == '') {
      wx.showToast({
        title: '请填写提现金额'
      });
      return;
    }
    if (money < 0 ) {
      wx.showToast({
        title: '请填写实际金额'
      });
      return;
    }
    if (money < yue.set[0].min){
      wx.showToast({
        title: '请至少提现'+yue.set[0].min+'元'
      });
      return;
    }
    if (money > yue.set[0].max) {
      wx.showToast({
        title: '最多'+yue.set[0].max +'元',
        duration:5000
      });
      return;
    }
    if (cart == '') {
      wx.showToast({
        title: '请填写银行卡'
      });
      return;
    }
    wx.switchTab({
      url: '../personal/personal'
    })
  },
  card: function (options) {
    wx.navigateTo({
      url: '../card/card'
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