const jwt = require("jsonwebtoken");
const AdminPanel = require("../models/AdminPanel");

exports.adminVerifyTokken = async (req, res, next) => {
  try {

    const token = req.headers.authorization.split(" ")[1];

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await AdminPanel.findOne({ _id: decode.id });
    if (admin === null) {
      res.status(401).send({ err: "Invalid authentication token" });
      return;
    } else {
      req.admin = admin;
      next();
    }
  } catch (err) {
    console.log(err);
    res.status(401).send("can't verify token");
  }
};
