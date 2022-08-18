import React, { useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import Logo from "../assets/logo.png";
import { Link as ScrollLink } from "react-scroll";
import TwLogo from "../assets/twlogo.png";
import FbLogo from "../assets/fblogo.png";
import IgLogo from "../assets/iglogo.png";
import LnLogo from "../assets/lnlogo.png";
import Maillogo from "../assets/mail.png";
import { Link } from "react-router-dom";
import Menu from "../assets/menu.png";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-[#F2F2F2] lg:rounded-b-[50px] sm:rounded-none z-[99] absolute lg:w-[1900px] lg:h-[65px]  sm:w-[360px] sm:h-[65px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center  lg:h-[104px] lg:w-[1500px] sm:h-[70px]">
            <div className="flex lg:space-x-[140px] lg:mt-[-20px] sm:space-x-[10px]">
              <div className="flex-shrink-0 lg:ml-[-890px] lg:mt-[-20px]">
                <Link to="/">
                  <img
                    className="lg:h-[40px] lg:w-[150px] lg:mt-[5px] lg:ml-[650px] sm:h-[30px] sm:ml-[110px]"
                    src={Logo}
                    alt="logo"
                  /></Link>
              </div>
              <div className="hidden md:block ">
                <div className="flex flex-row ">
                  <div className="ml-[80px] flex items-center mt-[-10px]">
                    <Link to="/">
                      <p
                        className="text-gray-700 text-[20px] ml-[20px] font-bold hover:underline hover:text-black"
                      >
                        SOLUTIONS
                      </p></Link>
                    <Link to="/">
                      <p
                        className="text-gray-700 text-[20px] ml-[20px] font-bold hover:underline hover:text-black"
                      >
                        ABOUT US
                      </p></Link>
                    <Link to="/">
                      <p
                        className="text-gray-700 text-[20px] ml-[20px] font-bold hover:underline hover:text-black"
                      >
                        PRODUCTS
                      </p></Link>
                    <Link to="#">
                      <p
                        className="text-gray-700 text-[20px] ml-[20px] font-bold hover:underline hover:text-black"
                      >
                        CAREER
                      </p></Link>
                    <Link to="/">
                      <button
                        className="bg-[#1AADD8] w-[230px] ml-[20px] h-[40px] text-white hover:text-black font-bold py-2 px-4 rounded-full"
                      >
                        CONTACT US
                      </button></Link>
                    <div className="flex flex-row space-x-[20px] ml-[500px] mt-[-10px]">
                      <a href="mailto:hasancankivrak@gmail.com"><img src={Maillogo} alt="Mail"></img></a>
                      <img src={LnLogo} alt="Linkedin" className="h-[32px] w-[32px]"></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="
                bg-white inline-flex items-center 
                justify-center p-2 rounded-md text-gray-400  
                 ml-[-240px]"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="34.215" height="24.987" viewBox="0 0 34.215 24.987">
                    <g id="Group_420" data-name="Group 420" transform="translate(-7.595 -13.399)">
                      <line id="Line_8" data-name="Line 8" x2="31.215" transform="translate(9.095 25.893)" fill="none" stroke="#1facd7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" />
                      <line id="Line_9" data-name="Line 9" x2="14.924" transform="translate(9.095 14.899)" fill="none" stroke="#333" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" />
                      <line id="Line_10" data-name="Line 10" x2="14.924" transform="translate(25.386 36.886)" fill="none" stroke="#333" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" />
                    </g>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="34.215" height="24.987" viewBox="0 0 34.215 24.987">
                    <g id="Group_420" data-name="Group 420" transform="translate(-7.595 -13.399)">
                      <line id="Line_8" data-name="Line 8" x2="31.215" transform="translate(9.095 25.893)" fill="none" stroke="#1facd7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" />
                      <line id="Line_9" data-name="Line 9" x2="14.924" transform="translate(9.095 14.899)" fill="none" stroke="#333" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" />
                      <line id="Line_10" data-name="Line 10" x2="14.924" transform="translate(25.386 36.886)" fill="none" stroke="#333" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" />
                    </g>
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
            <div className="md:hidden text-left w-[200px] h-[240px] bg-[#F2F2F2] rounded-br-[30px] mt-[-5px]" id="mobile-menu">
              <div ref={ref} className="ml-[20px] px-2 pt-2 pb-3 space-y-[15px] sm:px-3 ">
                <Link to="/">
                  <p
                    className="text-black mr-[500px] text-[15px] hover:underline"
                  >
                    SOLUTIONS
                  </p></Link>
                <Link to="/">
                  <p

                    className="text-black ml-[px] text-[15px] hover:underline mt-[10px]"
                  >
                    ABOUT US
                  </p>
                </Link>
                <Link to="/">
                  <p

                    className="text-black mr-[500px] text-[15px] hover:underline mt-[10px]"
                  >
                    PRODUCTS
                  </p>
                </Link>
                <Link to="#">
                  <p
                    className="text-black mr-[500px] text-[15px] hover:underline mt-[10px]"
                  >
                    CAREER
                  </p></Link>
                <Link to="/">
                  <button
                    className="bg-[#1AADD8] h-[45px] ml-[-20px] w-[140px] text-[15px] text-black hover:text-black font-bold py-2 px-4 rounded-full mt-[10px]"
                  >
                    CONTACT US
                  </button></Link>
                <div className="flex flex-row ml-[-10px]">
                  <a href="mailto:hasancankivrak@gmail.com"><img src={Maillogo} alt="mail"></img></a>
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
