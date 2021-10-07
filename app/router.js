"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post("/api/user/login", controller.login.index);
  router.get("/api/user", controller.user.getUserList);
  router.post("/api/user/create", controller.user.create);
  router.get("/api/user/:id", controller.user.detail);
  router.put("/api/user/update/:id", controller.user.update);
  router.delete("/api/user/delete/:id", controller.user.delete);
  router.delete("/api/user/deleteAll", controller.user.deleteAllUser);
};
