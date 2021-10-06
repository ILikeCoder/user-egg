const SubScription = require("egg").Subscription;
// 定时任务
module.exports = class UpdateCache extends SubScription {
  static get schedule() {
    return {
      interval: "3s",
      type: "all",
    };
  }
  async subscribe() {
    console.log('定时任务')
    // const res = await this.ctx.curl("http://www.api.com/cache", {
    //   dataType: "json",
    // });
    // this.ctx.app.cache = res.data;
  }
};
