const { Schema, model } = require("mongoose");

const common = {
  type: String,
  required: true,
  trim: true,
};
const productSchema = new Schema(
  {
    sub_cat: common,
    p_name: common,
    p_price: {
      ...common,
      type: Number,
    },
   
  },
  {
    timestamps: true,
  }
);

exports.Product = model("Product", productSchema);
