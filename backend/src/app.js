const express = require("express");
const cors = require("cors");
require("dotenv").config();

require("./config/database");

const ingestRoutes = require("./routes/ingestRoutes");
const itemRoutes = require("./routes/itemRoutes");
const queryRoutes = require("./routes/queryRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI Knowledge Inbox Backend Running 🚀",
  });
});

// Register API
app.use("/api/ingest", ingestRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/query", queryRoutes);
module.exports = app;