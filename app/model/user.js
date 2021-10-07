module.exports = app => {
  const mongoose = app.mongoose;
  const UserSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
      },
      password: {
        type: String,
        required: true,
        select: false,
      },
      avatar: {
        type: String,
        // 默认头像
        default:
          "https://himg.bdimg.com/sys/portraitn/item/public.1.8513a16f.4ludZ2n5Wr8Yow5NVoL4ZQ",
      },
    },
    {
      timestamps: {
        createAt: "created",
        updateAt: "updated",
      },
    }
  );
  return mongoose.model("User", UserSchema);
};
