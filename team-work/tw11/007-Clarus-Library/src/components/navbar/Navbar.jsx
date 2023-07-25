import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link className="link" to="/">
          HOME
        </Link>
        <Link className="link" to="/about">
          ABOUT
        </Link>
        <Link className="link" to="/register">
          REGİSTER
        </Link>
        <Link className="link" to="/login">
          LOGİN
        </Link>
      </div>
    </>
  );
};

export default Navbar;