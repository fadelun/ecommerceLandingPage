import React, { useState } from "react";
import logo from "../../images/logo.svg";
import CloseIcon from "../../images/icon-close.svg";
import MenuIcon from "../../images/icon-menu.svg";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [navbar, setNavbar] = useState(true);

  const showNavbar = (e) => {
    setNavbar(!navbar);
    console.log(navbar);
  };

  return (
    <div className="nav-tool flex lg:justify-between lg:px-0 px-6 lg:w-3/5 w-3/5 ">
      <button onClick={showNavbar} className={`lg:hidden ${navbar ? "absolute" : "fixed"}  top-6 left-3 z-50`}>
        {navbar ? <img src={MenuIcon} alt="icon-menu" /> : <img src={CloseIcon} alt="icon-close" />}
      </button>
      <div className="logo logo flex items-center lg:ml-0 ml-6 ">
        <img src={logo} alt="logo" />
      </div>
      {!navbar && <div className="fixed  inset-0  bg-opacity z-10"></div>}
      <ul className={`navbar-menu ${navbar ? "hidden" : ""} lg:text-blue-3 lg:flex justify-evenly content-center lg:w-2/3 lg:static fixed inset-y-0 left-0 sm:w-2/3 w-5/6 lg:pt-0 pt-12 px-4 bg-white-2 font-bold text-black z-20`}>
        <li className="lg:py-10 py-2  lg:hover:border-primary-1 hover:text-black border-b-transparent border-b-4 ">
          <Link className="">Collections</Link>
        </li>
        <li className="lg:py-10 py-2  lg:hover:border-primary-1 hover:text-black border-b-transparent border-b-4">
          <Link className="">Men</Link>
        </li>
        <li className="lg:py-10 py-2  lg:hover:border-primary-1 hover:text-black border-b-transparent border-b-4">
          <Link>Women</Link>
        </li>
        <li className="lg:py-10 py-2  lg:hover:border-primary-1 hover:text-black border-b-transparent border-b-4">
          <Link>About</Link>
        </li>
        <li className="lg:py-10 py-2  lg:hover:border-primary-1 hover:text-black border-b-transparent border-b-4">
          <Link>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftNav;
