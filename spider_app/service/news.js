'use strict';

const Service = require('egg').Service;
// 新闻页面的服务 service
class NewsService extends Service {
  async getNewsList() {
    const { ctx } = this;
    const api = this.config.api + 'appapi.php?a=getPortalList&catid=20&page=1'
    const response = await ctx.curl(api)
    
    const data = JSON.parse(response.data)

    return data.result
  }
  async getNewsContent(aid) {
    const { ctx } = this;
    // 获取数据
    const api = this.config.api + 'appapi.php?a=getPortalArticle&aid='+aid
    const response = await ctx.curl(api)
    
    const data = JSON.parse(response.data)
    return data.result
  }
}

module.exports = NewsService;
