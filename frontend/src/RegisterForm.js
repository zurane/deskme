import React from "react";
import axios from "axios";
import { SpinnerCircularFixed } from 'spinners-react';
import { useNavigate } from "react-router";

function RegisterForm() {
  const [formData, setFormData] = React.useState({
    names: "",
    email: "",
    password: "",
    role: "student",
    agreedToTerms: false,
  }); // State to manage form data

  const [agreed, setAgreed] = React.useState(formData.agreedToTerms); // State to manage checkbox for terms agreement
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);


  const navigate = useNavigate(); // Hook to programmatically navigate
  React.useEffect(() => {
    // Reset error message when form data changes
    setError("");
  }, [formData]);

  const OnlineStatus = navigator.onLine ? "online" : "offline";
  console.log("Online Status:", OnlineStatus);


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

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000); // Simulate a 5-second loading time

    // Make a POST request to the registration endpoint
    if (!navigator.onLine) {
      setError('You are currently offline. Please check your internet connection.')
    } else {
      axios
        .post("http://localhost:5000/auth/register", formData)
        .then((response) => {
          console.log("Registration successful:", response.data);
          setLoading(false);

          navigate("/login"); // Redirect to login page after successful registration
        })
        .catch((error) => {
          // Handle errors during registration
          console.error(
            "Registration error:",
            error.response || error.message || error
          );
          const errorMessage = error.response?.data?.message || "Registration failed. Please try again.";
          setError(errorMessage);
          setLoading(false);
        });
    }
  };

  return (
    <div
      className="p-10 w-full max-w-md"
    >
      {error && <div className="bg-orange-100 border-l-4 border-orange-500  text-orange-800 text-sm my-3 p-4" role="alert">{error}</div>}
      <div>
        <h1 className="font-bold text-3xl sm:text-md">Create an account</h1>
        <div>
          <p className="text-sm text-left text-gray-600 pl-1 py-2">
            Already have an account?
            <a href="/login" className="text-blue-500 ml-1 underline">
              Login
            </a>
          </p>
        </div>
      </div>
      <form className="text-sm my-3" onSubmit={handleFormSubmit}>
        {/* Form fields for user registration */}
        <input
          name="names"
          onChange={handleFormChange}
          placeholder="Full names"
          className="w-full border rounded border-gray-200 mb-3 py-4 px-2"
        />
        <input
          name="email"
          onChange={handleFormChange}
          type="email"
          placeholder="Student Email"
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
          <span className="text-xs text-gray-600 py-1">
            I agree to the platform's{' '}
            <span className="underline"> Terms of use </span>{' '} and {' '}
            <span className="underline"> Privacy policy</span>
          </span>
        </label>

        <div className="w-full bg-indigo-600 rounded text-white text-center mt-3 py-4 hover:bg-indigo-700 transition-colors hover:cursor-pointer">
          <button type="submit">{loading ? <SpinnerCircularFixed size={20} thickness={93} speed={100} color="rgba(255, 255, 255, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" /> : "Continue"}</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
// This is a simple registration form component.

