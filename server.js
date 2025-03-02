const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8000;

///// EJS /////
app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

///// use ////
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//// mongo setup ////
const db = require("./config/db");
db();

/// import routes ////
const adminRoute = require("./routes/admin.routes");
const categoryRoute = require("./routes/category.route");
const productRoute=require("./routes/product.route")
const viewRoute=require("./routes/viewRoutes")

/// routing /////

app.use("/",viewRoute)
app.use("/api/admin", adminRoute);
app.use("/api/admin/category", categoryRoute);
app.use("/api/product", productRoute);

app.listen(PORT, () =>
  console.log(`Example app listening on http://localhost:${PORT}`)
);
