module.exports = (options, app) => async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    const status = error.status || 500;
    const err =
      status === 500 && app.config.env === "prod"
        ? "Internal Server Error"
        : error.message;
    ctx.body = {
      code: status,
      error: err,
    };

    if (status === 422) {
      ctx.body.detail = error.errors;
    }
    ctx.status = 200;
  }
};
