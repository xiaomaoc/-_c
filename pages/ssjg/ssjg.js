Page({
  data:{
    showView_a: true
  },
  onLoad: function (options) {
    showView_a: (options.showView_a == "true" ? true : false)
    var keyword = options.keyword    //获取值
    var that = this
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getsearch?keyword=' + keyword,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        that.setData({
          goods: res.data,
        })
      }
    })
  },
  xq: function (options) {
    console.log(options.currentTarget.id);
    wx.navigateTo({
      url: '../xiangqing/xiangqing?id=' + options.currentTarget.id
    })
  },
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