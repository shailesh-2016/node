const { Admin } = require("../models/admin.model");
const { hashToPlain, plainToHash } = require("../utils/password");
const jwt=require("jsonwebtoken")

exports.signup = async (req, res) => {
  // console.log(req.body)
  try {
    const { a_username, a_email, a_password } = req.body;
    const existEmail = await Admin.findOne({ a_email });
    if (existEmail) {
      res.status(403).json({
        message: "email already exist",
      });
    } else {
      const hash_pass = await plainToHash(a_password);
      const admin = await Admin.create({
        a_username,
        a_email,
        a_password: hash_pass,
      });
      if (admin) {
        // res.status(201).json({
        //   message: "signup success",
        // });
        res.redirect("/index")
      }
    }
  } catch (error) {
    console.log("error: ", error);
  }
};

exports.login = async (req, res) => {
  try {
    const { a_email, a_password } = req.body;
    const existAdmin = await Admin.findOne({ a_email });
    if (existAdmin) {
      const admin = await Admin.findOne({ a_email });
      const match = await hashToPlain(a_password, admin.a_password);
      if (match) {
        const payload = {
          id: admin._id,
          role: admin.a_roleId,
        };
        const token = jwt.sign(payload, process.env.SECRET, {
          expiresIn: "1h",
        });
        res.header({ token }).status(200);
        
        return res.redirect('/index');
      } else {
        return res.status(403).json({
          message: "Incorrect Password",
        });
      }
    } else {
      return res.status(403).json({
        message: "Email does not exist",
      });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

