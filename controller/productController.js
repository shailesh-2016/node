const { Product } = require("../models/product.model");

exports.product = async (req, res) => {
  const { sub_cat, p_name, p_price } = req.body;
  const product = await Product.create({ sub_cat, p_name, p_price });
  console.log(product);
};

exports.trash = async (req, res) => {
 try {
   const { id } = req.params;
   const product = await Product.findByIdAndDelete(id);
   if(product){
    res.json({
      message:"deleted"
    })
  }
  //  res.redirect("/")
 } catch (error) {
  console.log('error: ', error);
  
 }
};
