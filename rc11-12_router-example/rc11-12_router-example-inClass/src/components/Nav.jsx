import logo from "../img/logo.png";
import {Link} from "react-router-dom"

function Nav () {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          <img src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/people" className="nav-link" aria-current="page">
                People
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/paths" className="nav-link" aria-current="page">
                Paths
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link" aria-current="page">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
