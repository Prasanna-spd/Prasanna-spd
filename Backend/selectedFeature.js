const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

router.post("/mySelectedfeature", async (req, res) => {
  try {
    const selectedFeature = req.body.feature;
    const selectedshoeName = req.body.brand;
    // console.log(selectedshoeName);
    // console.log(selectedFeature);
    // Fetch the data
    const features = mongoose.connection.db.collection("features");
    const myData = await features.findOne({ name: selectedshoeName });

    const selectedValue = myData[selectedFeature]; // Access the selected feature value using dot notation

    res.json(selectedValue);
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).send("Server Error: " + error.message);
  }
});

module.exports = router;
