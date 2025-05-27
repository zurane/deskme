import brandLogo from '../assets/logoipsum-250.svg';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
         <img
          src={brandLogo}
          alt="Logo"
          width="200"
          className="d-inline-block align-text-top"
          />
        </a>

{/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Button to create account */}
        <button
          className="navbar-toggler btn-grad"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon font-bold">
            Create account
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
// This is a simple navigation component for a React application.
