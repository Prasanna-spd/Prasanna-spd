const express = require("express");
const mongodb = require("./db");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.use(express.json());
app.use("/api", require("./selectedFeature"));

mongodb();
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
