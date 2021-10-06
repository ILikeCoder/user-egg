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

  // add your middleware config here
  config.middleware = ["errorHandle"];
  // 关掉csrf防范
  config.security = {
    csrf: {
      enable: false,
    },
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mongoose = {
    url: "mongodb://127.0.0.1:27017/egg-test-1",
    options: {
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
  };
  return {
    ...config,
    ...userConfig,
  };
};
