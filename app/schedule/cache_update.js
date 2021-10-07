const SubScription = require("egg").Subscription;
// 定时任务
module.exports = class UpdateCache extends SubScription {
  static get schedule() {
    return {
      interval: "3s",
      type: "all",
    };
  }
  async subscribe() {}
};
