import logo from "../images/logo.svg";
import socialLinks from "../socialLinks";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <PageLinks parentLink={"nav-links"} itemLink={"nav-link"} />

        <ul className="nav-icons">
          {socialLinks.map((social) => {
            /* const {id, href, icon}= social */
            return (
              <SocialLink {...social} key={social.id} itemClass="nav-icons" />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
