import React, { useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import TwLogo from "../assets/twlogo.png";
import FbLogo from "../assets/fblogo.png";
import IgLogo from "../assets/iglogo.png";
import LnLogo from "../assets/lnlogo.png";
import {Link as ScrollLink} from "react-scroll";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-[#F2F2F2] rounded-b-[50px] z-[99] absolute w-full flex">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between lg:h-[104px] sm:h-[70px]">
            <div className="flex lg:space-x-[290px]">
              <div className="flex-shrink-0 lg:ml-[-890px] lg:mt-[-20px]">
                <Link to="/">
                <img
                  className="lg:h-[57px] lg:w-[208px] lg:mt-[20px] lg:ml-[300px] sm:h-[50px] sm:ml-[10px]"
                  src={Logo}
                  alt="logo"
                /></Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-[10px] flex items-baseline space-x-4 mt-[20px]">
                  <Link to="/">
                  <p
                    href="#"
                    className="text-gray-700 font-bold text-[20px] hover:underline hover:text-black"
                  >
                    SOLUTIONS
                  </p></Link>

                  <p
                    href="#"
                    className="text-gray-700 font-bold text-[20px] hover:underline hover:text-black"
                  >
                    ABOUT US
                  </p>

                  <p
                    href="#"
                    className="text-gray-700 font-bold text-[20px] hover:underline hover:text-black"
                  >
                    PRODUCTS
                  </p>
                  <Link to="#">
                  <p
                    className="text-gray-700 font-bold text-[20px] hover:underline hover:text-black"
                  >
                    CAREER
                  </p></Link>

                  <button
                    href="#"
                    className="bg-[#1AADD8] text-white hover:text-black font-bold py-2 px-4 rounded-full"
                  >
                    CONTACT US 
                  </button>
                  <div className="flex flex-row h-[29px] w-[151px] mt-[-2px]">
                  <img src={TwLogo} alt="Twitter"></img>
                  <img src={IgLogo} alt="Instagram"></img>
                  <img src={FbLogo} alt="Facebook"></img>
                  <img src={LnLogo} alt="Linkedin"></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="
                bg-gray-900 inline-flex items-center 
                justify-center p-2 rounded-md text-gray-400 hover:text-white 
                hover:bg-gray-800 focus:outline-none focus:ring-2 
                focus:ring-offset-2 focus:ring-offset-gray-800 
                focus:ring-white ml-[110px]"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-[15px] w-[15px]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-[15px] w-[15px]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden text-left items-center mt-[50px]" id="mobile-menu">
              <div ref={ref} className="ml-[-50px] px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <p
                    href="#"
                    className="text-black mr-[500px] text-[15px] hover:underline"
                  >
                    SOLUTIONS
                  </p>

                  <p
                    href="#"
                    className="text-black mr-[500px] text-[15px] hover:underline"
                  >
                    ABOUT US
                  </p>

                  <p
                    href="#"
                    className="text-black mr-[500px] text-[15px] hover:underline"
                  >
                    PRODUCTS
                  </p>
                  <Link to="./CareerPage">
                  <p
                    className="text-black mr-[500px] text-[15px] hover:underline"
                  >
                    CAREER
                  </p></Link>
                  <a href="/">
                  <button
                    className="bg-[#1AADD8] h-[65px] mr-[500px] w-[100px] text-[15px] text-white hover:text-black font-bold py-2 px-4 rounded-full"
                  >
                    CONTACT US 
                  </button></a>
                  <div className="flex flex-row ml-[-10px]">
                  <img src={TwLogo} alt="Twitter"></img>
                  <img src={IgLogo} alt="Instagram"></img>
                  <img src={FbLogo} alt="Facebook"></img>
                  <img src={LnLogo} alt="Linkedin"></img>
                  </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
