'use strict';

const Controller = require('egg').Controller;
// 新闻页面的控制器
class NewsController extends Controller {
  async index() {
    const { ctx,service } = this;
    const data = await service.news.getNewsList()
    await ctx.render('news',{data})
  }
  async detailContent() {
    const { ctx,service } = this;
    const { aid } = ctx.query
    const data = await service.news.getNewsContent(aid)
    await ctx.render('newscontent', {
      data:data[0]
    })
  }
}

module.exports = NewsController;
