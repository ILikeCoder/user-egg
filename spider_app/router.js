'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/login',controller.login.index)
  router.post('/handleLogin',controller.login.handleLogin)
  router.get('/news', controller.news.index)
  router.get('/newscontent',controller.news.detailContent)
};
