import logo from "./logo (2).svg";
import { FaTimes } from "react-icons/fa";
import useGlobalContext from "./context";
import { links, social } from "./data";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button type="button" className="close-sidebar" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>

      {/* links */}
      <ul className="sidebar-links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          );
        })}
      </ul>
      {/* social */}
      <ul className="sidebar-icons">
        {social.map((social) => {
          const { id, icon, url } = social;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
