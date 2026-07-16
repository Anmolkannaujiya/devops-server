const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.json({ message1: "ci-cd pipeline is working fine bhaiya gazab chiz hai" ,
             message2: "mind you final time"
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
