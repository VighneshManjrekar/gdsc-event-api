require("dotenv").config({ path: "./configs/.env" });
const path = require("path");
const express = require("express");

// Security pkgs
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const cors = require("cors");

const app = express();

const connectDB = require("./configs/db");
const errorHandler = require("./middlewares/error");
const eventRoute = require("./routes/event.route");

app.use(express.json());

// Remove data using these defaults:
app.use(mongoSanitize());
// Security headers
app.use(helmet());
// Prevent XSS
app.use(xss());
// Limit req rate
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 15 minutes
  max: 100, // Each ip maximum 100 requests per 15 minutes
});
app.use(limiter);
// Protect against HTTP Parameter Pollution attacks
app.use(hpp());
// Enable CORS
app.use(cors());
// Serving static files
app.use(express.static(path.join(__dirname, "public")));

app.use(eventRoute);
app.use(errorHandler);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} in ${process.env.NODE_ENV} mode`);
  connectDB();
});
