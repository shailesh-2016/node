const router=require("express").Router()
const productController=require("../controller/productController")

router.post("/",productController.product)
router.get("/:id",productController.trash)

module.exports=router