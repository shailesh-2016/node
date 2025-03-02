const { Schema, model } = require("mongoose");

const catSchema = new Schema(
  {
    cat_name: {
      type: String,
      required: true,
      trim: true,
      unique: [true, "category already exist"],
    },
  },
  {
    timestamps: true,
  }
);

exports.Category = model("Category", catSchema);
