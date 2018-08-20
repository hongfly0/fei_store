Page({
  data: {
    currentTab: 0,  //对应样式变化
    scrollTop: 0,  //用作跳转后右侧视图回到顶部
    screenArray: [], //左侧导航栏内容
    screenId: "",  //后台查询需要的字段
    childrenArray: [], //右侧内容
  },

  onLoad: function (options) {
    var res = {
      "screenArray":[
        {
          "screenId":"1",
          "screenName":"衣服",
          "childrenArray" : 
            {
              "showImageUrl":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4015889879,4260009573&fm=27&gp=0.jpg",
              "childrenScreenArray":[
                {
                   "screenName":"女装",
                   "childrenScreenArray" : [{
                       "screenName": "女士上衣",
                       "showImageUrl": "http://mz.djmall.xmisp.cn/files/logo/20161213/14815978910.jpg"
                   }]
                },
                {
                  "screenName": "男装",
                  "showImageUrl": "http://mz.djmall.xmisp.cn/files/logo/20161213/14815978910.jpg",
                  "childrenScreenArray": [{
                    "screenName": "男士上衣",
                    "showImageUrl": "http://mz.djmall.xmisp.cn/files/logo/20161213/14815978910.jpg"
                  }]
                },
                {
                  "screenName": "童装",
                  "showImageUrl": "http://mz.djmall.xmisp.cn/files/logo/20161213/14815978910.jpg",
                  "childrenScreenArray": [{
                    "screenName": "大龄童装",
                    "showImageUrl": "http://mz.djmall.xmisp.cn/files/logo/20161213/14815978910.jpg"
                  }]
                }
              ]
            }
        },
        {
          "screenId": "2",
          "screenName": "数码",
          "childrenArray":
            {
              "showImageUrl": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534787083091&di=d88b57cc05d5b79e5d7ea851217ee092&imgtype=0&src=http%3A%2F%2Fwww.100tmt.com%2Fuploadimage%2Fimages%2F20160602140849.jpg",
              "childrenScreenArray": [
                {
                  "screenName": "女装",
                  "showImageUrl": "http://mz.djmall.xmisp.cn/files/logo/20161213/14815978910.jpg"
                },
                {
                  "screenName": "女装",
                  "showImageUrl": "http://mz.djmall.xmisp.cn/files/logo/20161213/14815978910.jpg"
                },
                {
                  "screenName": "女装",
                  "showImageUrl": "http://mz.djmall.xmisp.cn/files/logo/20161213/14815978910.jpg"
                }
              ]
            }
        }
      ]
    };

    var that = this;
    var screenArray = res.screenArray;
    var screenId = screenArray[0].screenId;
    that.setData({
      screenArray: screenArray,
      screenId: screenId,
      childrenArray: screenArray[0].childrenArray,
    }) ;   
    
    return false;

    that.setData({
      childrenArray: res.cateItems.screenArray[0],
    })
    console.log(that.data.childrenArray);
    return false;

    //获得分类筛选
    request.sendRrquest(API_queryClassify, 'POST', { flag: 0 }, )
      .then(function (res) {
        console.log("返回数据：");
        var screenArray = res.data.data.screenArray;
        var screenId = screenArray[0].screenId;
        that.setData({
          screenArray: screenArray,
          screenId: screenId,
        })
        console.log(screenArray);
        request.sendRrquest(API_queryClassify, 'POST', { flag: 1, screenId: screenId }, )
          .then(function (res) {
            console.log("返回数据：");
            that.setData({
              childrenArray: res.data.data.screenArray[0],
            })
            console.log(that.data.childrenArray);
          }, function (error) { console.log("返回失败"); });
      }, function (error) { console.log("返回失败"); });
  },

  navbarTap: function (e) {
    var that = this;
    var res= 
    {
      "screenArray": [
        {
          "screenId": "1",
          "screenName": "衣服",
          "childrenArray":
            {
              "showImageUrl": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4015889879,4260009573&fm=27&gp=0.jpg",
              "childrenScreenArray": [
                {
                  "screenName": "女装",
                  "childrenScreenArray": [{
                    "screenName": "女士上衣",
                    "showImageUrl": "http://mz.djmall.xmisp.cn/files/logo/20161213/14815978910.jpg"
                  }]
                },
                {
                  "screenName": "男装",
                  "showImageUrl": "http://mz.djmall.xmisp.cn/files/logo/20161213/14815978910.jpg",
                  "childrenScreenArray": [{
                    "screenName": "男士上衣",
                    "showImageUrl": "http://mz.djmall.xmisp.cn/files/logo/20161213/14815978910.jpg"
                  }]
                },
                {
                  "screenName": "童装",
                  "showImageUrl": "http://mz.djmall.xmisp.cn/files/logo/20161213/14815978910.jpg",
                  "childrenScreenArray": [{
                    "screenName": "大龄童装",
                    "showImageUrl": "http://mz.djmall.xmisp.cn/files/logo/20161213/14815978910.jpg"
                  }]
                }
              ]
            }
        },
        {
          "screenId": "2",
          "screenName": "数码",
          "childrenArray":
            {
              "showImageUrl": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534789324884&di=5cc7e58de54b82e70565babc65ea3f63&imgtype=0&src=http%3A%2F%2Fi8.hexun.com%2F2017-11-01%2F191461231.jpg",
              "childrenScreenArray": [
                {
                  "screenName": "手机",
                  "showImageUrl": "http://mz.djmall.xmisp.cn/files/logo/20161213/14815978910.jpg",
                      "childrenScreenArray": [
                        {
                            "screenName": "iphone",
                          "showImageUrl": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534789310806&di=0f9c924d3b7218efb2caa268d7566131&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2018%2F094%2F26%2F8K6E4AWNFJ7F_3_600.jpg"
                        },
                        {
                            "screenName": "vivo",
                          "showImageUrl": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534789283867&di=ccdcae8258d8903ea9b9cc1107cd2f22&imgtype=0&src=http%3A%2F%2Fwww.mems.me%2Fuploadfile%2F2018%2F0720%2F20180720022224565.jpg"
                        },
                        {
                            "screenName": "oppo",
                          "showImageUrl": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534789245946&di=980c2e090bf768cdf8c25aaf523d0ab7&imgtype=0&src=http%3A%2F%2Fimg04.hc360.com%2Ftele%2F201606%2F201606021148244965.jpg"
                        }
                      ]
                    },
                {
                  "screenName": "电脑",
                  "showImageUrl": "http://mz.djmall.xmisp.cn/files/logo/20161213/14815978910.jpg",
                  "childrenScreenArray": [
                    {
                      "screenName": "女士上衣",
                      "showImageUrl": "http://mz.djmall.xmisp.cn/files/logo/20161213/14815978910.jpg"
                    },
                    {
                      "screenName": "男士上衣",
                      "showImageUrl": "http://mz.djmall.xmisp.cn/files/logo/20161213/14815978910.jpg"
                    },
                    {
                      "screenName": "大龄童装",
                      "showImageUrl": "http://mz.djmall.xmisp.cn/files/logo/20161213/14815978910.jpg"
                    }
                  ]
                }
              ]
            }
        }
      ]
    };

    this.setData({
      currentTab: e.currentTarget.id,   //按钮CSS变化
      screenId: e.currentTarget.dataset.screenid,
      scrollTop: 0,   //切换导航后，控制右侧滚动视图回到顶部
    })

    //刷新右侧内容的数据
    var screenId = this.data.screenId;
    
    var that = this;
    var screenArray = res.screenArray;
    var screenId2 = screenArray[0].screenId;

    var child_data ;

    if(screenId==1){
      child_data = screenArray[0].childrenArray
    }else if (screenId == 2){
      child_data = screenArray[1].childrenArray
    }

    that.setData({
      screenArray: screenArray,
      screenId: screenId,
      childrenArray: child_data,
    });   

    return false;
    /*
    request.sendRrquest('http://baidu.com', 'POST', { flag: 1, screenId: screenId }, )
      .then(function (res) {
        console.log("返回数据：");
        that.setData({
          childrenArray: res.data.data.screenArray[0],
        })
        console.log(that.data.childrenArray);
      }, function (error) { console.log("返回失败"); });*/

    wx.request({
      url: 'http://127.0.0.1',
      data: { flag: 1, screenId: screenId },
      method: 'POST',
      success: function (res) {
        console.log('submit success');
      },
      fail: function (res) {
        console.log('submit fail');
      },
      complete: function (res) {
        console.log('submit complete');
      }

    })

  },
})