"use strict";

const Service = require("egg").Service;

class LoginService extends Service {
  async login({ username, password }) {
    const { ctx } = this;
    const search = {
      username: { $in: username },
      password: { $in: password },
    };
    const [User] = await ctx.model.User.find(search);
    if (User) {
      // 生成token
      const token = ctx.helper.getToken({ username, password });
      return ctx.helper.success({
        res: { id: User.id, username: User.username, token },
        msg: "登录成功！",
      });
    } else {
      return ctx.helper.success({
        res: { login: false },
        msg: "用户名密码错误！",
      });
    }
  }
}

module.exports = LoginService;
