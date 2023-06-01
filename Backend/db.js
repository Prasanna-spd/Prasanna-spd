const mongoose = require("mongoose");
const mongoUri =
  "mongodb+srv://dashsaradaprasanna54:shoe123store@cluster0.btqfgxr.mongodb.net/shoefactory?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB");
    const products = await mongoose.connection.db.collection("features");
    const cursor = products.find({});
    const data = await cursor.toArray();
    console.log(data);
  } catch (error) {
    console.log("Could not connect to MongoDB");
    throw error;
  }
}

module.exports = connect;
