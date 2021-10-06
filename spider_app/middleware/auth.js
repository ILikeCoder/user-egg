module.exports = (options, app) => {
  return async (ctx, next) => {
    // 在ctx中注入一个全局变量
    ctx.state.csrf = ctx.csrf
    await next()
  }
}