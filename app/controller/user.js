"use strict";

const Controller = require("egg").Controller;

module.exports = class UserController extends Controller {
  // 参数验证
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
  // 获取所有用户数据
  async getUserList() {
    const { ctx, service } = this;
    const res = await service.user.getUserList();
    ctx.helper.success({
      res,
      length: res.length,
    });
  }
  // 创建用户
  async create() {
    const { ctx, service } = this;
    ctx.validate(this.UserCreateRule);
    const payload = ctx.request.body;
    await service.user.create(payload);
    ctx.helper.msg("创建成功");
  }
  // 查询用户信息
  async detail() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    const res = await service.user.detail(id);
    ctx.helper.success({ res });
  }
  // 更新用户信息
  async update() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    const payload = ctx.request.body;
    await service.user.update(id, payload);
    ctx.helper.msg("更新用户数据成功");
  }
  // 删除某个用户信息
  async delete() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    await service.user.delete(id);
    ctx.helper.msg("删除用户数据成功");
  }
  async deleteAllUser() {
    const { ctx, service } = this;
    await service.user.deleteAllUser();
    ctx.helper.msg("删除所有用户成功");
  }
};
