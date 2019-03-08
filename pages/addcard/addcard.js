// pages/addcard/addcard.js
Page({
  data: {
    select: false,
    tihuoWay: '中国银行'
  },
bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  },
  mySelect(e) {
    console.log(e)
    var name = e.currentTarget.dataset.name
    this.setData({
      tihuoWay: name,
      select: false
    })
  },
  formSubmit: function (e) {
    console.log(e)
    console.log(this.data.tihuoWay)
    var numbers = e.detail.value.numbers;
    var chiyouren = e.detail.value.chiyouren;
    var openid = wx.getStorageSync('openid');
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getaddbank?openid=' + openid,
      data: {
        'numbers': e.detail.value.numbers,
        'chiyouren': e.detail.value.chiyouren,
        'tihuoWay': this.data.tihuoWay
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //console.log(res.data)
      }
    })
    // 表单验证
    // if (realname == '') {
    //   wx.showToast({
    //     title: '请填写收货人'
    //   });
    //   return;
    // }
    // if (!(/^1[34578]\d{9}$/.test(mobile))) {
    //   wx.showToast({
    //     title: '请填写正确手机号码'
    //   });
    //   return;
    // }
    // if (this.data.areaSelectedStr == '请选择省市区') {
    //   wx.showToast({
    //     title: '请输入区域'
    //   });
    //   return;
    // }
    // if (detail == '') {
    //   wx.showToast({
    //     title: '请填写详情地址'
    //   });
    //   return;
    // }
      wx.navigateTo({
       url: '../card/card'
     })
  },
})
