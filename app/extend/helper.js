const sd = require("silly-datetime");
module.exports = {
  formatTime(time) {
    return sd.format(new Date(time * 1000));
  },
  success({ res = null, msg = "请求成功", ...author }) {
    this.ctx.body = {
      code: 200,
      ...author,
      data: res,
      msg,
    };
    this.ctx.status = 200;
  },
  msg(msg) {
    this.ctx.body = {
      code: 200,
      msg,
    };
    this.ctx.status = 200;
  },
};
