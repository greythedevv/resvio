const express = require("express")
const app = express()
require("dotenv").config()
const connectDB = require("./src/config/db")

const PORT = process.env.PORT || 3000

 (async () => {
   await connectDB();
   app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
   });
 })();