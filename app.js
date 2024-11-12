const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/connection.db");
const userRoutes = require("./routes/user.routes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/users", userRoutes);

connectDB(
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })
);
