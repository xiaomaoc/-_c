Page({
  data: {
    // input默认是1
    num: 1,
    // 使用data数据对象设置样式名
    minusStatus: 'disabled'
  },
  /* 点击减号 */
  bindMinus: function (e) {
    console.log(e)
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
  bindPlus: function (e) {
    console.log(e)
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
  },
  onLoad: function (options) {
    //页面初始化 options为页面跳转所带来的参数
    var id = options.id    //获取值
    console.log(id)
    var that = this
    wx.request({
      url: 'http://www.zbmall.com/index.php/portal/All/getaxxs?id='+id,
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
      url: '../xiangqing/xiangqing?id='+ options.currentTarget.id
    })
  }
})
