Page({
  data: {
    dateValue: '　请选择您的出生日期',
    items: [
      {value: '男', checked: 'true' ,sex: 1},
      {value: '女' , sex: 0}
    ],
    showView_a: true
  },
  datePickerBindchange: function (e) {
    this.setData({
      dateValue: e.detail.value
    })
  },
  onLoad: function (options) {
    showView_a: (options.showView_a == "true" ? true : false)
    var openid = wx.getStorageSync('openid');
    var that = this
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getusers?&openid=' + openid,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if(res.data.sex == "0"){
          that.setData({
            items: [
              { value: '男',  sex: 1 },
              { value: '女', sex: 0,checked: 'true'}
            ]
          })
        }else{
          that.setData({
            items: [
              { value: '男', checked: 'true',sex: 1 },
              { value: '女', sex: 0,}
            ]
          })
        }
        console.log(res)
        that.setData({
          jiben_birthday: res.data.birthday,
          jiben_sex: res.data.sex
        })
      }
    })
  },
  formSubmit: function (e) {
    console.log(e)
    var birthday = e.detail.value.br
    var sex = e.detail.value.sex;
    var openid = wx.getStorageSync('openid');
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getuserinfo?openid=' + openid,
      data: {
        "sex": e.detail.value.sex,
        "birthday": e.detail.value.br
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
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
      url: '../set/set'
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
})
