
const express = require("express");
const session = require('express-session'); // Import express-session
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const contactRoutes= require('./routes/contactRoutes')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({}));
mongoose
  .connect("mongodb://localhost:27017/mydatabase")
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("MongoDb Eror", err);
  });

app.use(bodyParser.json());

// session management

app.use(session({
  secret: 'secret', // Use a secure secret for session management
  resave: false,
  saveUninitialized: true
}));



// Routes
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/api/submit",contactRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
