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
      role: req.body.role, // should validate 'role' before saving it.
      referenceId: req.body.referenceId, // set the referenceId as needed.
    });

    await admin.save();
    res.send(admin);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal server error" });
  }
};

exports.login = async (req, res, next) => {
  try {
    const admin = await AdminPanel.findOne({ email: req.body.email });
    if (!admin) {
      return res.status(401).send({ err: "Email doesn't exist" });
    }

    // compare the password
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      admin.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).send({ err: "Password is incorrect" });
    }

    // generate the JWT token
    const token = jwt.sign(
      { email: admin.email, adminName: admin.adminName, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );
    res.json(token);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal server error" });
  }
};
