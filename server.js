const express = require("express");
const path = require("path");
const morgan = require("morgan");
const PORT = process.env.PORT || 7000;
const app = express();
const cors = require("cors");

//DB setup
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/ecomm", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
const router = require("./routes/router")
router(app);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});