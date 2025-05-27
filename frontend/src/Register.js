function Register() {
  return (
    <div className="h-screen flex flex-row items-center justify-center p-10">
      <div className="bg-white p-10 shadow-md w-full max-w-md rounded-md border-gray-100 border">
        <div>
          <h1 className="font-bold text-3xl sm:text-md">Create your account</h1>
          <p className="text-sm text-gray-600 mb-4 mt-3">
            From homework to finals, access everything you need to stay ahead
            and stress less.
          </p>
        </div>
        <form className="text-sm my-3">
          <input
            name="name"
            placeholder="Full name"
            className="w-full border rounded border-gray-200 mb-3 py-4 px-2"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full rounded border border-gray-200 mb-3  py-4 px-2"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full rounded border border-gray-200 mb-3  py-4 px-2"
          />
          <select
            name="role"
            className="w-full bg-zinc-50 rounded border border-gray-200 mb-5 py-4 px-2"
          >
            <option value="student">I'm a student</option>
            <option value="teacher">I'm a Teacher</option>
          </select>
          <label className="text-xs text-gray-600 flex items-center mb-3">
            <input type="checkbox" className="mr-2" />By continuing, you agree to our Terms of Use and Privacy Policy.
          </label>

          <div className="w-full bg-zinc-900 rounded text-white text-center mt-1 py-3 hover:bg-zinc-800 transition-colors">
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
    </div>
  );
}

export default Register;
// This is a simple registration form component for a React application.
