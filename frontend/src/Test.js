import React from "react";
import axios from "axios"; // Importing React and axios for making HTTP requests
import brandLogo from "./assets/deskme-logo.png"; // Importing brand logo image

function Test() {
  const [formData, setFormData] = React.useState({
    names: "",
    email: "",
    password: "",
    role: "student",
    agreedToTerms: false,
  }); // State to manage form data

  const [agreed, setAgreed] = React.useState(formData.agreedToTerms); // State to manage checkbox for terms agreement
  const [error, setError] = React.useState("");

  //handleCheckboxChange function to update the agreed state
  const handleCheckboxChange = (event) => {
    setAgreed(event.target.checked);
    setFormData({
      ...formData,
      agreedToTerms: event.target.checked,
    }); // Update the agreed state based on checkbox input
  };

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    }); // Update form data state on input change
  };

  // Function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    if (!agreed) {
      setError("You must agree to the terms and Privacy Policy to continue.");
      return; // If terms are not agreed, show error and stop submission
    }

    // Make a POST request to the registration endpoint
    axios
      .post("http://localhost:5000/auth/register", formData)
      .then((response) => {
        // Handle successful registration
        console.log("Registration successful:", response.data);
        // Redirect or show success message
      })
      .catch((error) => {
        // Handle errors during registration
        console.error(
          "Registration error:",
          error.response || error.message || error
        );
        setError("Registration failed. Please try again.");
      });
  };

  return (
    <div
      className="bg-white opacity-100 p-10 w-full max-w-md rounded-sm border-gray-50 border"
    >
      <div>
        <img src={brandLogo} alt="Brand Logo" className="w-30 mb-4" />
        <h1 className="font-bold text-3xl sm:text-md">Create your account</h1>
        <p className="text-sm text-gray-600 mb-4 mt-3">
          Fuel your learning journey with ready-to-go resources for every
          subject and exam.
        </p>
      </div>
      <form className="text-sm my-3" onSubmit={handleFormSubmit}>
        {/* Form fields for user registration */}
        <input
          name="names"
          onChange={handleFormChange}
          placeholder="Full name"
          className="w-full border rounded border-gray-200 mb-3 py-4 px-2"
        />
        <input
          name="email"
          onChange={handleFormChange}
          type="email"
          placeholder="Email"
          className="w-full rounded border border-gray-200 mb-3  py-4 px-2"
        />
        <input
          name="password"
          onChange={handleFormChange}
          type="password"
          placeholder="Password"
          className="w-full rounded border border-gray-200 mb-3  py-4 px-2"
        />
        <select
          name="role"
          onChange={handleFormChange}
          className="w-full bg-zinc-50 rounded border border-gray-200 mb-5 py-4 px-2"
        >
          <option value="student">I'm a student</option>
          <option value="teacher">I'm a teacher</option>
        </select>

        <label className="text-xs text-gray-600 flex items-center mb-3">
          <input
            type="checkbox"
            checked={agreed}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <span>
            By continuing, you agree to our{" "}
            <span className="underline"> Terms of Use </span> and{" "}
            <span className="underline"> Privacy Policy </span>
          </span>
        </label>
        {error && <span className="text-red-500 text-xs mt-2">{error}</span>}
        <div className="w-full bg-zinc-900 rounded text-white text-center mt-3 py-4 hover:bg-zinc-800 transition-colors">
          <button type="submit">Continue</button>
        </div>

        <div>
          <p className="text-sm text-center text-gray-600 px-2 mt-4">
            Already have an account?
            <a href="/login" className="text-blue-500 ml-1 underline">
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Test;
// This is a simple registration form component.
