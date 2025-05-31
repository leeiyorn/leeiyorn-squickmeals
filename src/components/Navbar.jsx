import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white sticky-top shadow-sm py-2">
      <div className="container">
        {/* Brand Logo - Enhanced with logo icon */}
        <Link to="/" className="navbar-brand fw-bold d-flex align-items-center">
          <span className="text-danger me-1">
            <i className="bi bi-egg-fried fs-4"></i>
          </span>
          Leeiyorn's<span className="text-danger">Meals</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarcontents"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links - Enhanced with hover effects */}
        <div className="collapse navbar-collapse" id="navbarcontents">
          <ul className="navbar-nav me-auto">
            <li className="nav-item mx-1">
              <Link 
                to="/" 
                className="nav-link fw-semibold position-relative px-3"
                style={{ fontSize: '1.05rem' }}
              >
                Get Meals
                <span className="position-absolute bottom-0 start-50 translate-middle-x bg-danger rounded" 
                      style={{ height: '2px', width: '0', transition: 'width 0.3s' }}></span>
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link 
                to="/addmeals" 
                className="nav-link fw-semibold position-relative px-3"
                style={{ fontSize: '1.05rem' }}
              >
                Add Meals
                <span className="position-absolute bottom-0 start-50 translate-middle-x bg-danger rounded" 
                      style={{ height: '2px', width: '0', transition: 'width 0.3s' }}></span>
              </Link>
            </li>
          </ul>

          {/* Right-side elements - Enhanced with icons and better spacing */}
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item mx-2">
              <Link 
                to="/aboutus" 
                className="nav-link fw-semibold d-flex align-items-center"
              >
                <i className="bi bi-info-circle me-1"></i>
                About us
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link 
                to="/home" 
                className="nav-link fw-semibold d-flex align-items-center"
              >
                <i className="bi bi-link-45deg me-1"></i>
                Link
              </Link>
            </li>

            {/* Auth buttons - Enhanced with icons and better styling */}
            <li className="nav-item ms-3">
              <Link 
                to="/Login" 
                className="btn btn-outline-danger d-flex align-items-center"
              >
                <i className="bi bi-box-arrow-in-right me-1"></i>
                Log In
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link 
                to="/signup" 
                className="btn btn-danger d-flex align-items-center"
              >
                <i className="bi bi-person-plus me-1"></i>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Custom CSS for hover effects */}
      <style jsx>{`
        .nav-link:hover span {
          width: 70% !important;
        }
        .nav-link.active span {
          width: 70% !important;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;