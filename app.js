const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/connection.db");
const userRoutes = require("./routes/user.routes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/v1/users", userRoutes);

connectDB(
  app.listen(PORT, () => {
    console.log(`Server running on port  http://127.0.0.1:${PORT}`);
  })
);
