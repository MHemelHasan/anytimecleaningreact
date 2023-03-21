import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from "../../../src/assets/company-logo.png";
import CustomLink from "./CustomLink";

const Footer = () => {
  return (
    <div className="">
      <footer className="sm:h-48 footer p-10  bg-secondary text-white grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="items-center grid-flow-row">
          <div className="w-40 h-24 rounded-full">
            <img src={logo} alt={logo} />
          </div>
          <div className="mt-6 md:place-self-center md:justify-self-end">
            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <a>
                <FaFacebook className="w-5 h-full mx-auto text-white hover:text-secondary" />
              </a>

              <a>
                <FaInstagram className="w-5 h-full mx-auto text-white hover:text-secondary" />
              </a>
              <a>
                <FaLinkedin className="w-5 h-full mx-auto text-white hover:text-secondary" />
              </a>
              <a>
                <FaTwitter className="w-5 h-full mx-auto text-white hover:text-secondary" />
              </a>
            </div>
          </div>
        </div>
        <vr className="h-36 border border-slate-200" />

        <div>
          <span className="footer-title">Company</span>
          <a href="about" className="hover:text-black">
            About us
          </a>
          <a href="contact" className="hover:text-black">
            Contact
          </a>
          <a href="faq" className="hover:text-black">
            FAQ
          </a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="hover:text-black">Terms of use</a>
          <a className="hover:text-black">Privacy policy</a>
          <a className="hover:text-black">Cookie policy</a>
        </div>
        <vr className="h-36 border border-slate-200" />

        <CustomLink
          to="/provider-signup"
          className="ml-0 mt-6 md:mt-0 w-48 text-center border-2 border-primary px-6 py-2 bg-action-color hover:bg-primary hover:text-white rounded-3xl"
        >
          Become a Provider
        </CustomLink>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-black text-white border-base-300">
        <div>
          <p>
            {" "}
            &#169; {new Date().getFullYear()} &#64; All right reserved
            <a className="text-white hover:text-cyan-600" href="">
              {" "}
            </a>
          </p>
        </div>
        <div>
          <p className="italic">
            Our services are available to all members of the public regardless
            of race, gender or sexual orientation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

{
  /* <footer className="px-2 md:px-16 mx-auto py-6 bg-gray-800 text-gray-50">
<div className="container px-6 mx-auto space-y-6 divide-y divide-white md:space-y-12 divide-opacity-90">
  <div className="grid grid-cols-12">
    <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
      <a
        rel="noopener noreferrer"
        href="#"
        className="flex justify-start space-x-3 md:justify-start"
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary">
          <div className="w-20 rounded-full">
            <img src={logo} alt={logo} />
          </div>
        </div>
        <span className="self-center text-2xl font-semibold">
          Handy Services
        </span>
      </a>
      <div className="flex flex-col justify-center my-10 gap-4">
        <div className="flex items-center border rounded-lg px-4 py-2 w-52">
          <img
            src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
            className="w-7 md:w-8"
          />
          <div className="text-left ml-3">
            <p className="text-xs text-gray-200">Download on </p>
            <p className="text-sm md:text-base"> Google Play Store </p>
          </div>
        </div>

        <div className="flex items-center border rounded-lg px-4 py-2 w-52">
          <img
            src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
            className="w-7 md:w-8"
          />
          <div className="text-left ml-3">
            <p className="text-xs text-gray-200">Download on </p>
            <p className="text-sm md:text-base"> Apple Store </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-span-6 text-center md:text-left md:col-span-3">
      <p className="pb-1 text-lg font-medium footer-title">Company</p>
      <ul className="gap-2">
        <li className="mt-6">
          <a
            rel="noopener noreferrer"
            href="about"
            className="hover:text-primary"
          >
            About us
          </a>
        </li>
        <li className="mt-3">
          <a
            rel="noopener noreferrer"
            href="contact"
            className="hover:text-primary"
          >
            Contact
          </a>
        </li>
        <li className="mt-3">
          <a
            rel="noopener noreferrer"
            href="faq"
            className="hover:text-primary"
          >
            FAQ
          </a>
        </li>
        <li className="mt-3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="hover:text-primary"
          >
            Blogs
          </a>
        </li>
      </ul>
    </div>
    <div className="col-span-6 text-center md:text-left md:col-span-3">
      <p className="pb-1 text-lg font-medium footer-title">Legal</p>
      <ul>
        <li className="mt-6">
          <a
            rel="noopener noreferrer"
            href="#"
            className="hover:text-primary"
          >
            Terms of use
          </a>
        </li>
        <li className="mt-3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="hover:text-primary"
          >
            Privacy
          </a>
        </li>
        <li className="mt-3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="hover:text-primary"
          >
            Cookie
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div className="grid justify-center pt-6 lg:justify-between">
    <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
      <span>
        {" "}
        &#169; {new Date().getFullYear()} Copyright :
        <a className="text-white hover:text-primary" href="">
          {" "}
          Cleany
        </a>
      </span>
    </div>
    <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
      <a
        rel="noopener noreferrer"
        href="#"
        title="Facebook"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-gray-900"
      >
        <FaFacebook className="w-5 h-full mx-auto hover:text-cyan-700" />
      </a>
      <a
        rel="noopener noreferrer"
        href="#"
        title="Instagram"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-gray-900"
      >
        <FaInstagram className="w-5 h-full mx-auto hover:text-cyan-700" />
      </a>
      <a
        rel="noopener noreferrer"
        href="#"
        title="Twitter"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-gray-900"
      >
        <FaTwitter className="w-5 h-full mx-auto hover:text-cyan-700" />
      </a>
    </div>
  </div>
</div>
</footer> */
}
