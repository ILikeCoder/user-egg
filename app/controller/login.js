"use strict";

const Controller = require("egg").Controller;

class LoginController extends Controller {
  constructor(props) {
    super(props);
    this.UserCreateRule = {
      username: {
        type: "string",
        required: true,
        allowEmpty: false,
        format: /^[a-zA-Z0-9_-]{4,16}$/,
      },
      password: {
        type: "password",
        required: true,
        allowEmpty: false,
        min: 6,
      },
    };
  }
  async index() {
    const { ctx, service } = this;
    const { username, password } = ctx.request.body;
    ctx.validate(this.UserCreateRule);
    await service.login.login({ username, password });
  }
}

module.exports = LoginController;
