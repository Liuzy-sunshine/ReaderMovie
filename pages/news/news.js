var newsData=require("../../data/news-post.js")

Page({
  data:{
    // 小程序总是会读取data对象来做数据绑定，这个动作我们称为A，而这个动作A的执行，是在onLoad事件执行之后发生的
  },
  onLoad:function(options){
    // 初始化页面，option为页面跳转所带来的参数
    // 生命周期函数--监听页面加载
    this.setData({
      news_key:newsData.newslist
    });//相当于将数据放到page->data下了
  }
})