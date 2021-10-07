"use strict";

/** @type Egg.EggPlugin */
module.exports = {
  mongoose: {
    enable: true,
    package: "egg-mongoose",
  },
  // 参数校验
  validate: {
    enable: true,
    package: "egg-validate",
  },
  // 登录鉴权
  jwt: {
    enable: true,
    package: "egg-jwt",
  },
};
