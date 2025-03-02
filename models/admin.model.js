const { Schema, model } = require("mongoose");

const common = {
  type: String,
  required: true,
  trim: true,
};

const adminSchema = new Schema(
  {
    a_username: common,
    a_email: common,
    a_password: common,
    a_roleId: {
      ...common,
      type: Number,
      default: 0,
      enum: [0, 1],
    },
  },
  {
    timestamps: true,
  }
);

exports.Admin = model("Admin", adminSchema);
