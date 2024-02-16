import { useState } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <div>
        <img src="https://placehold.co/300x80" />
        <ul>
          {navLinks.map((nav, index) => (
            <li key={nav.id}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <button onClick={() => {}}>Hire Me</button>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
