import { useState } from "react";
import { NAV_LINKS } from "../utils/data";
import "./NavBar.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import NavBarMobile from "./NavBarMobile";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      {/* Need to figure out why menu does not transition open correctly / invalid. */}
      <NavBarMobile isOpen={toggle} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="https://placehold.co/300x80" />
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
          <button className="menu-btn" onClick={toggleMenu}>
            {toggle ? (
              <CloseOutlinedIcon style={{ fontSize: "1.8rem" }} />
            ) : (
              <MenuOutlinedIcon style={{ fontSize: "1.8rem" }} />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
