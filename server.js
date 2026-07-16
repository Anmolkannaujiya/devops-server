const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.json({ message: "ci-cd pipeline is working fine bhaiya gazab chiz hai" ,
             message: "run ho ja bro"
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
