import React from "react";
import socialLinks from "../socialLinks";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentLink={"footer-links"} itemLink={"footer-link"} />

      <ul className="footer-icons">
        {socialLinks.map((social) => {
          return (
            <SocialLink key={social.id} {...social} itemClass="footer-icon" />
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
