const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("✅ ThelaXpress backend is live!");
});

app.get("/api/greet", (req, res) => {
  res.json({ message: "Hello from ThelaXpress backend!" });
});

module.exports = app;
