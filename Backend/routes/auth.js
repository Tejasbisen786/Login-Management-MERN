// routes/auth.js

const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const router = express.Router();

// Admin login

router.post("/login", async (req, res) => {
  const { username, password } = req.body; // custom

  // Perform login authentication, if successful, create a session
  req.session.user = req.body.username; // Store user in session
  res.status(200).send({ message: "Login successful" });

  try {
    // Check if admin exists
    const admin = await User.findOne({ username});
    if (!admin) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid username or password" });
    }

    // Check password
    if (bcrypt.compareSync(password, admin.password)) {
      // Generate JWT token
      const token = jwt.sign({ username: admin.username }, "secretkey", {
        expiresIn: "1h",
      });
      res.json({ success: true, token });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Invalid username or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Logout route
router.post("/logout", (req, res) => {
  try {
    // Destroy session on logout
    req.session.destroy();
    res.status(200).send({ message: "Logout successful" });
  } catch (error) {
    console.log("Log Out Eror", error);
  }
});

module.exports = router;
