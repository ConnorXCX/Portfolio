import "./NavBarMobile.css";
import { TITLE, NAV_LINKS, BUTTON_TEXT } from "../../utils/data";

const NavBarMobile = ({ isOpen, toggleMenu }) => (
  <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
    <div className="mobile-menu-container">
      <ul>
        {NAV_LINKS.map((nav, index) => (
          <li key={nav.id}>
            <a className="menu-item" href={`#${nav.id}`}>
              <h2>{nav.title}</h2>
            </a>
          </li>
        ))}
        <a className="contact-btn" href="#contact">
          <h3>{BUTTON_TEXT}</h3>
        </a>
      </ul>
    </div>
  </div>
);

export default NavBarMobile;
