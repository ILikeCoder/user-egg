'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx } = this
    await ctx.render('login')
  }
  async handleLogin() {
    const { ctx } = this
    console.log(ctx.request.body)
    ctx.body = ctx.request.body
  }
}

module.exports = LoginController;
