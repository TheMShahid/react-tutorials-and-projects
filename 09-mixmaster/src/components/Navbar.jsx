import Wrapper from "../assets/wrappers/Navbar";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">mixmaster</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            about
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
