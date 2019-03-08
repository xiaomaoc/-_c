// pages/xiangqing/xiangqing.js
Page({
  data: {
    // job: [],
    // jobList: [],
    // id: '',
    // isClick: false,
    // jobStorage: [],
    // jobId: '',
    goods_id:'',
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 5000,
    duration: 500,
    // input默认是1
    num: 1,
    // 使用data数据对象设置样式名
    minusStatus: 'disabled',
    showView: true,
    showViews: true
  },
  // 收藏功能
  haveSave: function (options){
    if (!this.data.isClick == true) {
      // let jobData = this.data.jobStorage;
      // jobData.push({
      //   jobid: jobData.length,
      //   id: this.data.job.id
      // })
      // wx.setStorageSync('jobData', jobData);//设置缓存
      wx.showToast({
        title: '已取消收藏',
      });
    } else {
      wx.showToast({
        title: '已收藏',
      });
    }
    this.setData({
      isClick: !this.data.isClick
    })
    var goods_id = options.currentTarget.id
    var openid = wx.getStorageSync('openid');
    var that = this
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getcollect?openid=' + openid + '&goods_id=' + goods_id,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
          // if (res.data.sign == '0') {
          //     console.log(000)
          // } else if (res.data.sign == '1') {
          //   console.log(111)
          // }
        console.log(res)
        wx.setStorageSync('shoucang', res.data);
        that.setData({
        })
      }
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
  sys: function (options) {
    wx.switchTab({
      url: '/pages/index/index',
    });
  },
  car: function (options) {
    wx.reLaunch({
      url: '/pages/cart/cart'
    })
  },
  pl: function (options) {
    wx.navigateTo({
      url: '../pl/pl'
    })
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    showView: (options.showView == "true" ? true : false)
    showViews: (options.showViews == "true" ? true : false)
    canshu: (options.canshu == "true" ? true : false)
      //页面初始化 options为页面跳转所带来的参数
    var openid = wx.getStorageSync('openid');
    var shoucang = wx.getStorageSync('shoucang');
    console.log(shoucang)
      var id = options.id    //获取值
      console.log(id)
    wx.setStorageSync("id", options.id)
      var that = this
      wx.request({
        url: 'http://www.zbmall.com/index.php/portal/All/getgood_info?id=' + id + '&openid=' + openid,
        headers: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          if (res.data.sign == '0') {
            that.setData({
              isClick: !false 
            })
          } else if (res.data.sign == '1') {
            that.setData({
              isClick: !true
            })
          }
          console.log(res)
          console.log(res.data.sign)
          that.setData({
            good_info: res.data.good_info,
            good_loop: res.data.good_loop,
            // sign: res.data.sign,
            goods_id: id
          })
        }
      })

  }, 
  add:function(){
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  },
    add_a: function (options) {
    console.log(options)
    var that = this;
    console.log(this.data.num)
    var goods_id = options.currentTarget.id
    var openid = wx.getStorageSync('openid');
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/geticart?openid=' + openid + '&goods_id=' + goods_id + '&num=' + this.data.num,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        that.setData({
        })
      }
    })
      wx.showToast({
        title: '加入成功',
      });
  },
  adds: function () {
    var that = this;
    that.setData({
      showViews: (!that.data.showViews)
    })
  },
  canshu: function () {
    var that = this;
    that.setData({
      canshu: (!that.data.canshu)
    })
  },
  addss: function (options) {
    console.log(options)
    var goods_num = this.data.num
    console.log(goods_num)
    var that = this;
    var goods_id = options.currentTarget.id
    var openid = wx.getStorageSync('openid');
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getorderadd?openid=' + openid + '&goods_id=' + goods_id + '&goods_num=' + this.data.num,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        console.log(res.data)
        wx.setStorageSync("xiangqing",res.data)
        that.setData({
          xq_aa:res.data
        })
      }
    })
    wx.navigateTo({
      url: '../dingdan/dingdan'
    })
  },

  bindMinus: function () {
    var num = this.data.num;
    // 如果大于1时，才可以减
    if (num > 1) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 点击加号 */
  bindPlus: function () {
    var num = this.data.num;
    // 不作过多考虑自增1
    num++;
    // 只有大于一件的时候，才能normal状态，否则disable状态
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 输入框事件 */
  bindManual: function (e) {
    var num = e.detail.value;
    // 将数值与状态写回
    this.setData({
      num: num
    });
  }
})





