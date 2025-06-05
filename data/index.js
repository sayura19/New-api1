const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Gojo Movie API Running...");
});

app.get("/api/movies", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data/movies.json"));
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});