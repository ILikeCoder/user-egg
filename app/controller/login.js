"use strict";

const Controller = require("egg").Controller;

class LoginController extends Controller {
  async index() {
    const { ctx, service } = this;
    const { username, password } = ctx.request.body;
    await service.login.login({ username, password });
  }
}

module.exports = LoginController;
