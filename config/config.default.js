/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1633409280276_5073";

  // 配置中间件
  config.middleware = ["errorHandle", "tokenHandler"];

  config.tokenHandler = {
    match(ctx) {
      // 只匹配指定路由，反之如果只忽略指定路由，可以用ignore
      //匹配不需要验证token的路由
      const url = ctx.request.url;
      if (url.startsWith("/api/user/login")) {
        // ctx.logger.info('config.tokenHandler:','关闭token验证')
        return false;
      } else {
        // ctx.logger.info('config.tokenHandler:','开启token验证')
        return true; // 开启中间件，开启token验证
      }
    },
  };
  // 关掉csrf防范
  config.security = {
    csrf: {
      enable: false,
    },
  };
  // add your user config here
  // mongodb配置
  config.mongoose = {
    url: "mongodb://127.0.0.1:27017/egg-test-1",
    options: {
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
  };
  // 跨域设置
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: ["*"],
  };
  config.cors = {
    origin: "*",
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS",
  };
  return {
    ...config,
  };
};
