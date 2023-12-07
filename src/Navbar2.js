import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';


const Navbar2 = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const [isMenuActive, setIsMenuActive] = useState(false);
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const location = useLocation();

  useEffect(() => {
    return () => {
      setDropdownOpen(false);
    };
  }, [location.pathname]); 

  return (
    <>
      <header className="bg-white">
        <div className="container mx-auto px-8 py-4 flex items-center">
          <a href='/'>
          <div className="mr-auto md:w-48 flex-shrink-0">
            <img className="h-8 md:h-12" src='logo2.png' alt="logo" />
          </div></a>

         
          <div className="test hidden md:flex">
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link to="/" className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded focus:outline-none" aria-current="page">
                  Home
                </Link>
              </li>
              <li className='hidden'>
                <button onClick={toggleDropdown} className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto">
                  Tools
                  <svg className={`w-4 h-4 ml-1 ${isDropdownOpen ? 'transform rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>
                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <div className="  bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44 absolute" onClick={toggleDropdown}>
                    <ul className="py-1" aria-labelledby="dropdownLargeButton">
                      <li>
                        <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Dashboard</a>
                      </li>
                      <li>
                        <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Settings</a>
                      </li>
                      <li>
                        <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Earnings</a>
                      </li>
                      <li>
                        <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Sign out</a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <Link to={"/Products"} className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Products</Link>
              </li>
              <li>
                <Link to={"/Login"} className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0" >Log-in</Link>
              </li>
              <li>
                <Link to={"/Contact"} className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Button with menu icon for medium and large screens */}
          <div className="md:hidden ml-auto">
            <button onClick={toggleDropdown} className="text-gray-700 hover:bg-gray-50 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">
              <FaBars className="w-6 h-6" />
            </button>
            {/* Mobile dropdown menu */}
            {isDropdownOpen && (
              <div className="bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44 absolute" onClick={toggleDropdown}>
                <ul className="py-1" aria-labelledby="dropdownLargeButton">
                  <li>
                    <Link to="/" className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded focus:outline-none" aria-current="page">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to={"/Products"} className="text-sm hover-bg-gray-100 text-gray-700 block px-4 py-2">Products</Link>
                  </li>
                  <li>
                    <Link to={"/Login"} className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0" >Log-in</Link>
                  </li>
                  <li>
                    <Link to={"/Contact"} className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Contact</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Phone number */}
          <div className="ml-auto md:w-48 md:flex hidden flex-col place-items-end">
            <span className="font-bold md:text-l">+212679790006</span>
            <span className="font-semibold text-sm text-gray-400">Support 24/7</span>
          </div>
        </div>

        <hr />
      </header>
    </>
  );
};

export default Navbar2;





