"use strict";

/** @type Egg.EggPlugin */
module.exports = {
  mongoose: {
    enable: true,
    package: "egg-mongoose",
  },
  validate: {
    enable: true,
    package: "egg-validate",
  },
};
