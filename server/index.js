const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const authRoutes = require("./routes/authRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use(notFound);
app.use(errorHandler);

connectDB().then(() => {
  app.listen(process.env.PORT || 8080, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
