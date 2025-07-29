const express = require("express");
const Users = require("../models/Users");
const bcrypt = require("bcrypt");

const router = express.Router();
// Register route


// ============================================ User Registration ============================================
// This route handles user registration by accepting user details, checking for existing users, hashing the password
router.post("/register", async (req, res) => {
  //destructuring the request body to extract user details from form data
  const { names, email, password, role, agreedToTerms } = req.body;
  try {
    // Check if the user already exists
    const doesUserExist = await Users.findOne({ email });
    if (doesUserExist) {
      return res.status(400).json({ message: "Email already exists. Please use a different email." });
    }

    //Password hashing
    const hashedPassword = await bcrypt.hash(password, 10);

    //Create a new user
    const newUser = new Users({
      names,
      email,
      password: hashedPassword,
      role,
      agreedToTerms: agreedToTerms || false, // Default to false if not provided
    });

    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: newUser._id,
        names: newUser.names,
        email: newUser.email,
        role: newUser.role,
      },
    });

  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
});


//============================================= User Login ===================================================
// This route handles user login by checking the provided email and password against the database
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Sorry, we could not find the account with that email address!" });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password or email. Let's try again." });
    }

    // Create a JWT token
    // Note: You would typically create a JWT token here, but for simplicity, we are not implementing it in this example.

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        names: user.names,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
// Login route
