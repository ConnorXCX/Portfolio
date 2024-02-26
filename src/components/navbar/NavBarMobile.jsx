import "./NavBarMobile.css";
import { NAV_LINKS, BUTTON_TEXT } from "../../utils/data";

const NavBarMobile = ({ isOpen, toggleMenu }) => (
  // mobile-menu
  <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
    {/* mobile-menu-container */}
    <div className="mobile-menu-container">
      <ul>
        {NAV_LINKS.map((nav, index) => (
          <li key={nav.id}>
            {/* menu-item */}
            <a className="menu-item" href={`#${nav.id}`}>
              <h2>{nav.title}</h2>
            </a>
          </li>
        ))}
        {/* contact-btn */}
        <a className="contact-btn" href="#contact">
          <h3>{BUTTON_TEXT}</h3>
        </a>
      </ul>
    </div>
  </div>
);

export default NavBarMobile;
