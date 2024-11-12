const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/connection.db");
const userRoutes = require("./routes/user.routes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
app.use(morgan("dev"));

app.use(express.json());

app.use("/api/v1/users", userRoutes);

connectDB(
  app.listen(PORT, () => {
    console.log(`Server running on port  http://127.0.0.1:${PORT}`);
  })
);
