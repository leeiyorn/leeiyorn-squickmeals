import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm mt-1">
   
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand fw-bold">
          Leeiyorn's<span className="text-danger">Meals</span>
        </Link>

       

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarcontents"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarcontents">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <b><Link to="/" className="nav-link">Get Meals</Link></b>
            </li>
            <li className="nav-item">
              <b><Link to="/addmeals" className="nav-link">Add Meals</Link></b>
            </li>
           
          </ul>
         

          {/* Authorization Links (Aligned Right) */}
          <ul className="navbar-nav ms-auto">

                <li className="nav-item">
                  <b><Link to="/aboutus" className="nav-link">About us</Link></b>
                </li>

                <li className="nav-item">
                  <b><Link to="/home" className="nav-link">Link</Link></b>
                </li>



            <li className="nav-item">
              <Link to="/Login" className="btn btn-outline-primary me-2">Log In</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="btn btn-primary">Sign Up</Link>
            </li>
          </ul>
        </div>
     
    </nav>
  );
};

export default Navbar;
