"use strict";

const Service = require("egg").Service;

class UserService extends Service {
  // 获取用户
  async getUserList() {
    return this.ctx.model.User.find()
  }
  // 创建用户
  async create(payload) {
    return this.ctx.model.User.create(payload);
  }
  // 查询用户
  async detail(_id) {
    return this.ctx.model.User.findById(_id);
  }
  // 更新用户
  async update(_id, payload) {
    return this.ctx.model.User.findByIdAndUpdate(_id, payload);
  }
  // 删除某个用户
  async delete(_id) {
    return this.ctx.model.User.findByIdAndDelete(_id);
  }
  // 删除所有用户
  async deleteAllUser() {
    return this.ctx.model.User.deleteMany();
  }
}

module.exports = UserService;
