import "./NavBarMobile.css";
import { NAV_LINKS } from "../utils/data";

const NavBarMobile = ({ isOpen, toggleMenu }) => (
  <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
    <div className="mobile-menu-container">
      <img className="logo" src="https://placehold.co/300x80" alt="logo" />

      <ul>
        {NAV_LINKS.map((nav, index) => (
          <li key={nav.id}>
            <a className="menu-item" href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
        <button className="contact-btn" onClick={() => {}}>
          Hire Me
        </button>
      </ul>
    </div>
  </div>
);

export default NavBarMobile;