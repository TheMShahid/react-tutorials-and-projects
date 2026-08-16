import useGlobalContext from "./context";
import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();

  const handleMenu = (e) => {
    // console.log(e.target);
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };

  return (
    <nav onMouseOver={handleMenu}>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button className="nav-toggle" onClick={openSidebar}>
          <FaBars />
        </button>

        {/* sidebar links later */}
        <NavLinks />
      </div>
    </nav>
  );
};
export default Navbar;
