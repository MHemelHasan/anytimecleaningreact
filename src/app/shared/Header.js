import React from "react";
import logo from "../../assets/company-logo.png";
import CustomLink from "./CustomLink";

const Header = () => {
  const menuItems = (
    <>
      <CustomLink to="/home">Home</CustomLink>
      <CustomLink to="/shop">Shop</CustomLink>
      <CustomLink to="/contact">Contact</CustomLink>{" "}
      <CustomLink to="/login">Login</CustomLink>
      <CustomLink
        to="/provider-signup"
        className="ml-0 md:ml-20 mt-6 md:mt-0 w-48 text-center border-2 border-primary px-6 py-2 bg-action-color hover:bg-primary hover:text-white rounded-3xl"
      >
        Become a Provider
      </CustomLink>
    </>
  );
  return (
    <div className="navbar px-4 md:px-20 mx-0 md:mx-auto bg-white shadow-lg rounded">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex="0"
            className="md:hidden hover:text-emerald-500 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 text-black font-serif font-medium hover:text-primary shadow bg-base-100 rounded-box  w-52"
          >
            {" "}
            {menuItems}
          </ul>
        </div>

        <CustomLink to="/home" className="ml-2 w-20 rounded-full">
          <img src={logo} alt={logo} />
        </CustomLink>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal p-1 text-blackfont-serif font-medium ">
          {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default Header;
