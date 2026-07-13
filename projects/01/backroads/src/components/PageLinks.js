import pageLinks from "../data";
import PageLink from "./PageLink";

const PageLinks = ({ parentLink, itemLink }) => {
  return (
    <ul className={parentLink} id="nav-links">
      {pageLinks.map((link) => {
        return <PageLink key={link.id} link={link} itemClass={itemLink} />;
      })}
    </ul>
  );
};

export default PageLinks;
