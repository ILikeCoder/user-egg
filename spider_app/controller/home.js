'use strict';

const Controller = require('egg').Controller;
// home的首页控制器
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('index')
  }
}

module.exports = HomeController;
