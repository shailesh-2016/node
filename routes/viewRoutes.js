const router = require("express").Router();
const { Category } = require("../models/catModel");
const { Product } = require("../models/product.model");

router.get("/index", (req, res) => {
  res.render("pages/index");
});
router.get("/", (req, res) => {
  res.render("pages/login");
});
router.get("/register", (req, res) => {
  res.render("pages/register");
});

/// category /////
router.get("/addCategory", (req, res) => {
  res.render("pages/addCategory");
});

router.get("/viewCat", async (req, res) => {
  try {
    const categories = await Category.find();
    console.log(categories);
    res.render("pages/viewCat", { categories });
  } catch (error) {
    console.log("error: ", error);
  }
});
router.get("/updateCat", async (req, res) => {
  const { id } = req.query;
  // console.log(id)
  const singleCat = await Category.findById(id);
  //   console.log(singleProduct)
  res.render("pages/updateCat", { category: singleCat });
});


//// product ////
router.get("/addProduct", async(req, res) => {
  const categories=await Category.find().populate("category")
  res.render("pages/addProduct",{categories});
});
router.get("/viewProduct", async(req, res) => {
  const products=await Product.find()
  res.render("pages/viewProduct",{products});
});

module.exports = router;
