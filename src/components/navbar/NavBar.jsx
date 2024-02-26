import { useState } from "react";
import { TITLE, NAV_LINKS, BUTTON_TEXT } from "../../utils/data";
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
    <>
      {/* TODO: Need to figure out why menu does not transition open correctly / invalid. */}
      <NavBarMobile isOpen={toggle} toggleMenu={toggleMenu} />

      {/* nav-wrapper */}
      <nav className="nav-wrapper">
        {/* nav-content */}
        <div className="nav-content">
          <h1>{TITLE}</h1>

          <ul>
            {NAV_LINKS.map((nav, index) => (
              <li key={nav.id}>
                {/* menu-item */}
                <a className="menu-item" href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
            {/* contact-btn */}
            <a className="contact-btn" href="#contact">
              {BUTTON_TEXT}
            </a>
          </ul>

          {/* menu-btn */}
          <div className="menu-btn" onClick={toggleMenu}>
            {toggle ? (
              <CloseOutlinedIcon style={{ fontSize: "1.8rem" }} />
            ) : (
              <MenuOutlinedIcon style={{ fontSize: "1.8rem" }} />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
