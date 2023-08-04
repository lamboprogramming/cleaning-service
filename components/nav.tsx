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
    <nav className="bg-gray-900 border-gray-200">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <a href="/" className="flex items-center">
          <Image
            src={"https://flowbite.com/docs/images/logo.svg"}
            className="h-8 mr-3"
            width="100"
            height="100"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold text-white whitespace-nowrap">
            Champion Cleaning
          </span>
        </a>
        <button
          onClick={toggleNav}
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden"
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
          <ul className="flex flex-col p-4 mt-4 font-medium bg-black border border-gray-100 rounded-lg md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black dark: md:dark: dark:border-gray-700">
            <li>
              <Link
                href='/'
                className="block py-2 pl-3 pr-4 text-white rounded md:p-0 dark:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            
            <li>
              <a
                href="/services"
                className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </a>
            </li>
            
            <li>
              <Link
                href="/faq"
                className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                FAQ
              </Link>
            </li>
      
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;