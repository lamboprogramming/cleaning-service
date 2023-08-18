'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/Champion.png';
import { Montserrat } from 'next/font/google';

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-white border-gray-200 ">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <a href="/" className="flex items-center">
          <Image
            src={logo}
            className="h-16 mr-3"
            width="100"
            height="100"
            alt="Flowbite Logo"
          />
          {/* <span className="self-center text-xl font-semibold text-black whitespace-nowrap ">
            Champion Cleaning
          </span> */}
        </a>
        <button
          onClick={toggleNav}
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-black rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded={isNavOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isNavOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 text-lg font-medium border border-gray-100 rounded-lg md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link
                href='/'
                className="block py-2 pl-3 pr-4 text-black transition duration-200 rounded cursor-pointer md:p-0 md:border-0 md:hover:text-yellow-200 sm:hover:scale-125"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            
            <li>
              <a
                href="/services"
                className="block py-2 pl-3 pr-4 text-black transition duration-200 rounded md:border-0 md:hover:text-yellow-200 md:p-0 sm:hover:scale-125"
              > 
                Services
              </a>
            </li>
            
            <li>
              <Link
                href="/contact"
                className="block py-2 pl-3 pr-4 text-black transition duration-200 rounded md:border-0 md:hover:text-yellow-200 md:p-0 sm:hover:scale-125 "
              >
                Contact
              </Link>
            </li>
      
            <li>
      
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;