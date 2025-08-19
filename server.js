const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;

// GET /data → always returns database.json content
app.get("/data", (req, res) => {
  fs.readFile("database.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("❌ Failed to read database");
    }
    res.type("text/plain");       // optional: send as plain text
    res.send(data);               // send the exact content of database.json
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
