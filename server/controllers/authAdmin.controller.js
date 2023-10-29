const AdminPanel = require("../models/AdminPanel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res, next) => {
  try {
    // check for duplicate admin user
    const registered = await AdminPanel.findOne({ email: req.body.email });
    if (registered) {
      return res.status(409).send({ err: "Email already exists" });
    }
    // create a new admin user
    const admin = new AdminPanel({
      adminName: req.body.adminName,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
      role: req.body.role // should validate 'role' before saving it. // set the referenceId as needed.
    });
    if (req.body.referenceId) {
      admin.referenceId = req.body.referenceId;
    } else {
      admin.referenceId = admin._id;
    }
    await admin.save();
    res.status(200).send("adminPanel registered successfully");
  } catch (err) {
    console.log(err);
    res.status(400).json({ err: "Incomplete fields detected" });
  }
};

exports.login = async (req, res, next) => {
  try {
    const admin = await AdminPanel.findOne({ email: req.body.email });
    if (admin === null) {
      res.status(404).send({ err: "Invalid username or password" });
      return;
    } else {
      const isPasswordValid = bcrypt.compareSync(
        req.body.password,
        admin.password
      );
      if (!isPasswordValid) {
        res.status(401).send({
          accessToken: null,
          error: "Invalid Username or password",
        });
        return;
      } else {
        const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, {
          expiresIn: "5d",
        });
        let response;       
          response = {
            id: admin._id,
            email: admin.email,
            referenceId : admin.referenceId
        }
        res.status(200).send({
          userData : response,
          userRole : admin.role,
          message: "Login successfull",
          accessToken: token,
        });
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ err });
  }
};
