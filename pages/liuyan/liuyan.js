Page({
  data: {
    items: [
      { name: 'ly', value: '留言', checked: 'true', sex: "留言"},
      { name: 'ts', value: '投诉', sex: "投诉"},
      { name: 'xw', value: '询问', sex: "询问"},
      { name: 'sh', value: '售后', sex: "售后"},
      { name: 'qg', value: '求购', sex: "求购"}
    ]
  },
  changeFocus:function(){
    focus:true
  },
  formSubmit: function (e) {
    console.log(e)
    var setMessage = {
      sendInfo: this.data.userMessage
    }
    this.setData(setMessage)
    var that = this
    var openid = wx.getStorageSync('openid');
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getaddmsg?openid=' + openid,
      data: {
        'n_sign': e.detail.value.sex,
        'n_title': e.detail.value.zhuti,
        'n_msg': e.detail.value.neir,
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if (res.data == 2) {
          wx.showToast({
            title: '请填写留言主题'
          });
          return;
        }
        if (res.data == 3) {
          wx.showToast({
            title: '请填写留言内容'
          });
          return;
        }
        // 清空输入框内容
        that.setData({
          form_info: ''
        })
      }
    })
    this.onLoad();
  },
  onLoad: function (options) {
    //页面初始化 options为页面跳转所带来的参数
    var openid = wx.getStorageSync('openid');
    var that = this
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getmsg_list?openid=' + openid,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        that.setData({
         liuyan: res.data
        })

      }
    })
  },
})