const { Category } = require("../models/catModel");

exports.store = async (req, res) => {
  // console.log("bodddddddd", req.body);
  try {
    const { cat_name } = req.body;
    const existCategory = await Category.findOne({ cat_name });

    if (existCategory) {
      res.status(400).json({
        message: "Category already exists",
      });
    } else {
      const category = await Category.create({ cat_name });
      if (category) {
        res.json({
          success: true,
          message: "Category added",
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.index = async (req, res) => {
  try {
    const category = await Category.find();
    if (category.length > 0) {
      res.json({
        success: true,
        category,
      });
    } else {
      res.json({
        message: "category record not found",
      });
    }
  } catch (error) {
    console.log("error: ", error);
  }
};

exports.trash = async (req, res) => {
  try {
    const { id } = req.params;
    const existCat=await Category.findByIdAndDelete(id)
    if(existCat){
      res.json({
        message:"deleted"
      })
    }else{
      res.json({
        message:"category not found"
      })
    }
  } catch (error) {
    console.log('error: ', error);
    
  }
};

exports.update=async(req,res)=>{
  try{
    const {id}=req.params
    await Category.findByIdAndUpdate({_id:id},{cat_name:req.body.cat_name})
    res.redirect("/viewCat")
  }catch(err){
    res.json(err)
  }
}
