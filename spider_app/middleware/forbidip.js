// 屏蔽一些IP的中间件
module.exports = (options, app) => {
  // 必须返回一个异步的方法
  return async (ctx, next) => {
    const {forbidIp} = options
    if (!forbidIp.includes(ctx.request.ip)) return await next()
    ctx.body = '你的ip已经被屏蔽'
    ctx.status = 403;
  }
}