const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res, next) => {
  try {
    //check for duplicate user
    const registered =
      (await User.findOne({ email: req.body.email })) ||
      (await User.findOne({ username: req.body.username }));
    console.log(registered);

    if (registered) {
      return res.status(409).send({ err: "username or email already exists" });
    }

    //create a new user
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    });
    await user.save();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.send("server error");
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).send({ err: "email doesn't exists" });
    }

    //compare this password
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return res.status(401).send({ err: "password incorrect" });
    }

    //generate the JWT token
    const tokken = jwt.sign(
      { email: user.email, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );
    res.json(tokken);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: " internal server error" });
  }
};
