const express = require("express");
const Users = require("../models/Users");
const bcrypt = require("bcrypt");

const router = express.Router();
// Register route

router.post("/register", async (req, res) => {
  //destructuring the request body to extract user details
  const { names, email, password, role, agreedToTerms } = req.body;

  try {
    // Check if the user already exists
    const doesUserExist = await Users.findOne({ email });
    if (doesUserExist) {
      return res.status(400).json({ message: "Email already exists" });
    }

    //Password hashing
    // It's important to hash passwords before storing them in the database for security reasons.
    const hashedPassword = await bcrypt.hash(password, 10);

    //Create a new user
    const newUser = new Users({
      names,
      email,
      password: hashedPassword,
      role,
      agreedToTerms: agreedToTerms || false, // Default to false if not provided
    });
    await newUser.save(); // Save the new user to the database

    //Create a JWT token
    // Note: You would typically create a JWT token here, but for simplicity, we are not implementing it in this example.

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: newUser._id,
        names: newUser.names,
        email: newUser.email,
        role: newUser.role,
      },
    });

    // Respond with the created user and token
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
// Login route
