Page({
    onTap:function(){
        // 一页面跳到另一个页面，存在父子级关系（有返回两字）
        // wx.navigateTo({
        //     url:"../news/news"
        // });
        // 一页面跳到另一个页面，平行页面关系（无返回二字）
        wx.redirectTo({
          url: '../news/news',
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
        // console.log(1)
    }
})