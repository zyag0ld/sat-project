const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const { response } = require("express");
const express = require("express");
const connectDB = require("./config/connectDB");
const alertaRoutes = require("./routes/alertaRoute");
const lecturaRoutes = require("./routes/lecturaRoute");
const cors = require("cors");

const app = express();

app.use(cors());

// Middleware (function that can be sloted inside of urls) urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Calling everything inside alertaRoutes (access from the server)
app.use("/api/v1/alertas", alertaRoutes); // append the route to the routes on alertaRoute.js
app.use("/api/v1/lecturas", lecturaRoutes); // append the route to the routes on lecturaRoute.js

// Routes (other routes on the routes folder)
app.get("/", (req, res) => {
  res.send("Home page");
});

// Define server running on port
const PORT = process.env.PORT || 5000;

// Make sure to connect first to the DB before starting the server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

// Call function to start server
startServer();