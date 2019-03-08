
const app = getApp()
Page({
  data: {
    userInfo: {},
    nickName:'',
    avatarUrl:'',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // login:function(){
    
  // },
  bindViewTap: function () {
  },
  onLoad: function () {
    
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
        
      })
    }
    var userinfo = app.globalData.userInfo;
    var nickName=userinfo.nickName;
    var avatarUrl = userinfo.avatarUrl;
    var openid = wx.getStorageSync('openid');
    console.log(userinfo);
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getlogins?name=' + nickName + '&avatarUrl=' + avatarUrl + '&openid=' + openid,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        // that.setData({
        // })
      }
    })

  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      nickName: e.detail.userInfo.nickName,
      avatarUrl: e.detail.userInfo.avatarUrl,
      hasUserInfo: true
    })
  },
  yuee: function (options) {
    wx.navigateTo({
      url: '../yuee/yuee'
    })
  },
  txmx: function (options) {
    wx.navigateTo({
      url: '../txmx/txmx'
    })
  },
  dizhi: function (options) {
    wx.navigateTo({
      url: '../dizhi/dizhi'
    })
  },
  card: function (options) {
    wx.navigateTo({
      url: '../card/card'
    })
  },
  order: function (options) {
    wx.navigateTo({
      url: '../order/order'
    })
  },
  tuijian: function (options) {
    wx.navigateTo({
      url: '../tuijian/tuijian'
    })
  },
  shoucang: function (options) {
    wx.navigateTo({
      url: '../shoucang/shoucang'
    })
  },
  liuyan: function (options) {
    wx.navigateTo({
      url: '../liuyan/liuyan'
    })
  },
  pinglun: function (options) {
    wx.navigateTo({
      url: '../pinglun/pinglun'
    })
  },
  yaoqing: function (options) {
    wx.navigateTo({
      url: '../yaoqing/yaoqing'
    })
  },
  tuihuo: function (options) {
    wx.navigateTo({
      url: '../tuihuo/tuihuo'
    })
  },
  set: function (options) {
    wx.navigateTo({
      url: '../set/set'
    })
  }
})
