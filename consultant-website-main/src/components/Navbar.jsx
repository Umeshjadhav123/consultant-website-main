import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { FaHome, FaInfoCircle, FaEnvelope, FaBriefcase } from "react-icons/fa";
import logo from "../assets/logo-removebg-preview.png";

const Navbar = () => {
  const navRef = useRef(null);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    gsap.from(navRef.current.children, {
      opacity: 0,
      y: -50,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <nav ref={navRef} className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between py-0">
          <div className="flex space-x-7">
            <div>
              <Link
                to="/"
                className="flex items-center py-4 px-2 bg-gr8een-900  "
              >
                <span className="rounded-full overflow-hidden font-semibold text-gray-500 text-lg">
                  <img
                    src={logo}
                    alt="logo"
                    className="scale-[1.4] h-16 w-16 -ml-0.5 -mb-2 -mt-1"
                  />
                </span>
              </Link>
            </div>
          </div>
          {/* {isMobile && ( */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className="py-4 px-2 text-gray-500 hover:text-gray-900 transition duration-300"
            >
              <FaHome className="inline-block mr-1" /> Home
            </Link>
            <Link
              to="/services"
              className="py-4 px-2 text-gray-500 hover:text-gray-900 transition duration-300"
            >
              <FaBriefcase className="inline-block mr-1" /> Services
            </Link>
            <Link
              to="/about"
              className="py-4 px-2 text-gray-500 hover:text-gray-900 transition duration-300"
            >
              <FaInfoCircle className="inline-block mr-1" /> About
            </Link>
            <Link
              to="/contact"
              className="py-4 px-2 text-gray-500 hover:text-gray-900 transition duration-300"
            >
              <FaEnvelope className="inline-block mr-1" /> Contact
            </Link>
            <Link
              to="/consultation"
              className="transition duration-300 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full inline-block"
            >
              Get a Consultation
            </Link>
          </div>
          <div className="block md:hidden">
            <button
              onClick={() => setOpenNav(!openNav)}
              className="text-gray-500 hover:text-gray-900 focus:outline-none pt-8"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {openNav ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
            {openNav && (
              <div className="md:hidden flex flex-col items-center space-y-1">
                <Link
                  to="/"
                  className="py-4 px-2 text-gray-500 hover:text-gray-900 transition duration-300"
                >
                  <FaHome className="inline-block mr-1" /> Home
                </Link>
                <Link
                  to="/services"
                  className="py-4 px-2 text-gray-500 hover:text-gray-900 transition duration-300"
                >
                  <FaBriefcase className="inline-block mr-1" /> Services
                </Link>
                <Link
                  to="/about"
                  className="py-4 px-2 text-gray-500 hover:text-gray-900 transition duration-300"
                >
                  <FaInfoCircle className="inline-block mr-1" /> About
                </Link>
                <Link
                  to="/contact"
                  className="py-4 px-2 text-gray-500 hover:text-gray-900 transition duration-300"
                >
                  <FaEnvelope className="inline-block mr-1" /> Contact
                </Link>
                <Link
                  to="/consultation"
                  className="transition duration-300 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full inline-block"
                >
                  Get a Consultation
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
