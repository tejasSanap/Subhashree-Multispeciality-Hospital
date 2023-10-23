const jwt = require("jsonwebtoken");

exports.authenticate = async (req, res, next) => {
  try {
    const verifyTokken = req.headers.authorization.split(" ")[1];
    
    if (!verifyTokken) {
      console.log("no tokken");
    }
    
    const decodedTokken = jwt.verify(verifyTokken, process.env.JWT_SECRET);
    console.log(decodedTokken);
    next();
  } catch (err) {
    return res.status(500).json({ message: "auth failed" });
  }
};
