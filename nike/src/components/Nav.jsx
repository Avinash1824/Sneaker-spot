import { useState } from "react";
import headerlogo from "../assets/images/header-logo.svg";

// import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants";
const Nav = () => {
  let [open, setOpen] = useState(false);
  return (
    <header
      className={`padding-x py-8 z-10 w-full absolute padding-l padding-r `}
    >
      <nav className="md:flex justify-between items-center max-container mx-start">
        <a href="#home">
          <img src={headerlogo} alt="Logo" width={190} height={30} />
        </a>
        <div className="md:static md:min-h-fit absolute min-h-[60vh] top-0 md:w-auto w-full left-0 flex items-center px-10 ">
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <ul
            className={` md:flex md:items-center md:pb-0 pb-10 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in cursor-pointer ${
              open
                ? "top-[18%] max-md:bg-white cursor-pointer"
                : "top-[-390px] "
            }`}
          >
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-md text-slate-grey font-medium md:ml-8 hover:text-coral-red hover:font-semibold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
