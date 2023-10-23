const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const authRoute = require("../server/routes/authRoute");
const doctorRoute = require("../server/routes/doctorRoute");
const blogRoute = require("../server/routes/blogRoutes");
const reviewRoute = require("./routes/reviewRoutes");
const { authenticate } = require("./middleware/auth.middleware");

require("dotenv").config();
//env variables
const PORT = process.env.port;
const MONGOURL = process.env.mongourl;

//connect to mongodb
async function connectToMongoDB() {
  try {
    await mongoose.connect(MONGOURL);
    console.log("connected to db");
  } catch (err) {
    console.log("error connect to db", err);
  }
}
connectToMongoDB();

app.use(cors());
app.use(express.json());

//auth routing middleware
app.use("/api/auth", authRoute);
app.use("/api/doctor",doctorRoute);
app.use('/api', reviewRoute);
app.use('/api',blogRoute);

app.get("/api/dashboard", authenticate, (req, res, next) => {
  res.json("this was protected route");
});

app.get("/", (req, res) => {
  return res.json("hi this is home page");
});

app.listen(PORT, () => {
  console.log(`hi ${PORT} open for backend development`);
});
