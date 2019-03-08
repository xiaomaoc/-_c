//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    iconSize: [30],
    iconColor: [
      'red'
    ],
    iconType: [
      'success'
    ],
    indicatorDots: true,
    autoplay: true,
    circular:true,
    interval: 5000,
    duration: 500,
  },
  formSubmit: function (e) {
    console.log(e)
    var that = this
    var detail = e.detail.value.userName;
    that.setData({
      form_info: ''
    })
      wx.navigateTo({
        url: '../ssjg/ssjg?keyword=' + e.detail.value.userName
      })
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }
  },
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getaxxx',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        that.setData({
          article: res.data.class,
          goods: res.data.goods,
          looppic: res.data.looppic
        })
      }
    })
  },
  lb: function (options) {
    console.log(options.currentTarget.id);
    wx.navigateTo({
      url: '../liebiao/liebiao?id=' + options.currentTarget.id
    })
  },

  xq: function (options) {
    console.log(options.currentTarget.id);
    wx.navigateTo({
      url: '../xiangqing/xiangqing?id='+options.currentTarget.id
    })
  }
})

