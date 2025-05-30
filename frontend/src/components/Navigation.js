import brandLogo from "../assets/deskme-logo.png"; // Importing brand logo image

function Navigation() {
  return (
    <nav>
      <div className="container-fluid flex flex-row justify-between items-center bg-slate-50 px-10 py-3">
        <a className="navbar-brand pb-3" href="/">
          <img
            src={brandLogo}
            alt="Logo"
            width="100"
            className="d-inline-block align-text-top"
          />
        </a>
        {/* Button to create account */}
        <button
          className="navbar-toggler text-xs btn-grad"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon font-bold">Create account</span>
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
// This is a simple navigation component for a React application.
