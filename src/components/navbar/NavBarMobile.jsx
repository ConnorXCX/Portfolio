import { NAV_LINKS, BUTTON_TEXT } from "../../utils/data";

const NavBarMobile = ({ isOpen, toggleMenu }) => (
  // TODO: translate-x-[-100vw] and -translate-x-50% do not work for easing the menu in and out.
  <div
    className={`${
      isOpen ? "opacity-100 translate-x-0" : "invisible"
    } w-screen h-screen hidden bg-[rgba(0,0,0,0.3)] fixed !z-[999] opacity-0 shadow-[0px_29px_80px_rgba(0,0,0,0.3)] transition-all duration-[0.3] ease-[ease] left-0 top-0 md:block`}
    onClick={toggleMenu}
  >
    <div className="w-[60vw] h-screen backdrop-blur-[50px] p-8">
      <ul className="flex flex-col gap-8 ml-[-2rem] list-none">
        {NAV_LINKS.map((nav, index) => (
          <li key={nav.id}>
            <a
              className="no-underline text-[0.9rem] font-medium text-white relative cursor-pointer before:bg-menuItemGradient before:content-['_'] before:w-8 before:h-[0.2rem] before:absolute before:bottom-[-0.6rem] before:opacity-0 before:translate-x-[-1.5rem] before:transition-all before:duration-[0.3s] before:ease-[ease] before:rounded-lg hover:before:w-full hover:before:translate-x-0 hover:before:opacity-100"
              href={`#${nav.id}`}
            >
              <h2>{nav.title}</h2>
            </a>
          </li>
        ))}
        <a
          className="bg-contactButtonBackground outline-[1.5px] outline outline-transparent no-underline text-[0.9rem] font-medium flex items-center justify-center text-white cursor-pointer transition-all duration-[0.3] ease-[ease] px-8 py-[0.6rem] rounded-[0.2rem] border-[none] hover:bg-none hover:bg-[#000] hover:text-[#a993fe] hover:outline-[1.5px] hover:outline hover:outline-[#a993fe]"
          href="#contact"
        >
          <h3>{BUTTON_TEXT}</h3>
        </a>
      </ul>
    </div>
  </div>
);

export default NavBarMobile;
