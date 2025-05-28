const mongoose = require("mongoose");

// Define the user schema
// This schema includes fields for names, email, password, role, and agreement to terms
const userSchema = new mongoose.Schema({
    names: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        required: true,
        enum: ["student", "teacher"], // Ristricting roles to 'student' or 'teacher'
        default: "student",
    },
    agreedToTerms: {
        type: Boolean,
        required: true,
        default: false, // Default to false, must be set to true for registration
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Users = mongoose.model("Users", userSchema);
module.exports = Users;