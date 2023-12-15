const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const authRoute = require("../server/routes/authRoute");
const doctorRoute = require("../server/routes/doctorRoute");
const blogRoute = require("../server/routes/blogRoutes");
const reviewRoute = require("./routes/reviewRoutes");
const hospitalRoute = require("./routes/hospitalRoute");
const appointmentRoute = require("./routes/appointmentRoute");
const authAdminRoute = require("../server/routes/authAdmin");
const expressWinston = require("express-winston");
const winston = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");

const fileRotateTransport = new DailyRotateFile({
  filename: "logs/rotate-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  maxFiles: "8d",
  maxSize: "10m",
});

expressWinston.requestWhitelist.push("body");
expressWinston.responseWhitelist.push("body");

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

app.use(
  expressWinston.logger({
    transports: [fileRotateTransport, new winston.transports.Console()],
    meta: true,
    dynamicMeta: (req, res) => {
      const httpRequest = {
        requestMethod: req.method,
        requestUrl: `${req.protocol}://${req.get("host")}${req.originalUrl}`,
        protocol: `HTTP/${req.httpVersion}`,
        remoteIp:
          req.ip.indexOf(":") >= 0
            ? req.ip.substring(req.ip.lastIndexOf(":") + 1)
            : req.ip,
        requestSize: req.socket.bytesRead,
        userAgent: req.get("User-Agent"),
        referrer: req.get("Referrer"),
        requestPath: req.originalUrl.split("?")[0],
      };
 
      let meta = {
        httpRequest,
      };

      if (req.body) {
        if (res.statusCode >= 500 && res.statusCode <= 599) {
          meta.req = {
            body: req.body,
            headers: req.headers,
            query: req.query,
          };
        } else {
          meta.req = {
            body: null,
            headers: req.headers,
            query: req.query,
          };
        }
      }

      meta.timestamp = new Date().toISOString();
      meta.serverType = "hospital";
      meta.projectName = "subhashree-multispeciality-hospital";
      meta.serverConfigType = process.env.SERVER_CONFIG_TYPE;
      meta.responseTime = res.responseTime;
      meta.userType = req.headers.usertype;
      meta.userId = req.headers.userid;

      if (res) {
        httpRequest.status = res.statusCode;
        httpRequest.latency = {
          seconds: Math.floor(res.responseTime / 1000),
          nanos: (res.responseTime % 1000) * 1000000,
        };

        if (res.body) {
          if (typeof res.body === "object") {
            httpRequest.responseSize = JSON.stringify(res.body).length;
          } else if (typeof res.body === "string") {
            httpRequest.responseSize = res.body.length;
          }
          if (res.statusCode < 500 || res.statusCode > 599) {
            meta.res = {
              body: null,
            };
          } else
            meta.res = {
              body: res.body,
            };
        }
      }

      return meta;
    },
    colorize: true,
    ignoreRoute: function (req, res) {
      if (req.method === "OPTIONS") {
        return true;
      }
      return false;
    },
  })
);

connectToMongoDB();

app.use(cors());
app.use(express.json());

//auth routing middleware
app.use("/api/auth", authRoute);
app.use("/api/authAdmin", authAdminRoute);
app.use("/api/doctor", doctorRoute);
app.use("/api", reviewRoute);
app.use("/api", blogRoute);
app.use("/api/hospital", hospitalRoute);
app.use("/api/appointment", appointmentRoute);

app.get("/api/dashboard", (req, res, next) => {
  res.json("this was protected route");
});

app.get("/", (req, res) => {
  return res.json("hi, this is home page");
});

app.listen(PORT, () => {
  console.log(`hi, ${PORT} open for backend development`);
});
