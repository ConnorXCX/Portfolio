import "./NavBarMobile.css";
import { TITLE, NAV_LINKS } from "../../utils/data";

const NavBarMobile = ({ isOpen, toggleMenu }) => (
  <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
    <div className="mobile-menu-container">
      <ul>
        {NAV_LINKS.map((nav, index) => (
          <li key={nav.id}>
            <a className="menu-item" href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
        <a className="contact-btn" href="#contact">
          Hire Me
        </a>
      </ul>
    </div>
  </div>
);

export default NavBarMobile;
