import React from "react";
import axios from "axios";
import { SpinnerCircularFixed } from "spinners-react";
import brandLogo from "./assets/deskme-logo.png";
import { useNavigate } from "react-router";

function LoginForm() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  }); // State to manage form data

  // State to manage checkbox for terms agreement
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate(); // Hook to programmatically navigate
  React.useEffect(() => {
    // Reset error message when form data changes
    setError("");
  }, [formData]);

  const OnlineStatus = navigator.onLine ? "online" : "offline";
  console.log("Online Status:", OnlineStatus);

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    }); // Update form data state on input change
  };

  // Function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000); // Simulate a 5-second loading time

    // Make a POST request to the registration endpoint
    if (!navigator.onLine) {
      setError(
        "You are currently offline. Please check your internet connection."
      );
    } else {
      axios
        .post("http://localhost:5000/auth/login", formData)
        .then((response) => {
          console.log("Login successful:", response.data);
          setLoading(false);
          navigate("/dashboard"); // Redirect to dashboard page after successful login
        })
        .catch((error) => {
          // Handle errors during registration
          console.error(error.response || error.message || error);
          const errorMessage =
            error.response?.data?.message;
          setError(errorMessage);
          setLoading(false);
        });
    }
  };

  return (
    <div className="opacity-100 p-10 w-full max-w-md">
      {error && (
        <div
          className="bg-orange-100 border-l-4 border-orange-500 text-orange-800 text-sm my-4 px-3 py-4"
          role="alert"
        >
          {error}
        </div>
      )}
      <div>
        <h1 className="font-bold text-3xl sm:text-md">Let's log you in</h1>
        <div>
          <p className="text-sm text-left text-gray-600 pl-1 py-2">
            Don't have an account?
            <a href="/register" className="text-blue-500 ml-1 underline">
              Register
            </a>
          </p>
        </div>
      </div>
      <form className="text-sm my-3" onSubmit={handleFormSubmit}>
        {/* Form fields for user registration */}
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

        <div className="w-full bg-indigo-600 rounded text-white text-center mt-3 py-4 hover:bg-indigo-700 transition-colors hover:cursor-pointer">
          <button type="submit">
            {loading ? (
              <SpinnerCircularFixed
                size={20}
                thickness={93}
                speed={100}
                color="rgba(255, 255, 255, 1)"
                secondaryColor="rgba(0, 0, 0, 0.44)"
              />
            ) : (
              "Login"
            )}
          </button>
        </div>
        <div></div>
      </form>
    </div>
  );
}

export default LoginForm;
// This is a simple login form component.
