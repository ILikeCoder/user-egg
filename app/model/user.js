module.exports = app => {
  const mongoose = app.mongoose
  const UserSchema = new mongoose.Schema({
    username: {
      type: String,
      unique: true,
      required:true
    },
    password: {
      type: String,
      required:true
    },
    avatar: {
      type: String,
      // 默认头像
      default:'123'
    },
    createAt: {
      type: Date,
      default:Date.now
    }
  })
  return mongoose.model('User',UserSchema)
}