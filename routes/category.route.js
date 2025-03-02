const router=require("express").Router()
const categoryController=require("../controller/catController")

router
.route("/")
.post(categoryController.store)
.get(categoryController.index)

router
.route("/:id")
.get(categoryController.trash)

router
.route("/edit/:id")
.post(categoryController.update)

module.exports=router