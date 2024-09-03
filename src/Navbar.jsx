import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img className="h-14 mr-2" src="public\images\logotype.png" alt="Logo" />
            <h3  className="text-white text-2xl font-semibold">MobileStore</h3>
          </div>



          {/* Menu Items */}
          <div className="hidden md:flex md:items-center md:space-x-5">
            <Link to="/" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/aboutus" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">AboutUs</Link>
            <div className="relative">
              {/* Dropdown Menu */}
              <a onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium focus:outline-none">
                Blogs
              </a>
              {isMenuOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-slate-800 ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link to="/upcomingphone" className="block px-2 py-2 text-sm text-gray-100  hover:bg-gray-400" role="menuitem">Upcoming Phone</Link>
                    <Link href="newlaunch" className="block px-2 py-2 text-sm text-gray-100 hover:bg-gray-400" role="menuitem">New Launch </Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/contactus" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">ContactUs</Link>
            <a href="#" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Terms</a>
            
            
          </div>
          {/* Auth Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" to='/signin'> Login</Link>
            <Link to="/signup" className="bg-orange-700 hover:bg-red-400 text-white px-4 py-2 rounded-md text-sm font-medium">Sign Up</Link>
          </div>
          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium focus:outline-none">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium block">Home</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium block">About us</a>
            <div className="relative">
              {/* Dropdown Menu */}
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium focus:outline-none">
                Dropdown
              </button>
              {isMenuOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 1</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 2</a>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <a href="#" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Login</a>
              </div>
              <div className="ml-auto">
                <a href="#" className="bg-orange-700 hover:bg-red-400 text-white px-4 py-2 rounded-md text-sm font-medium">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
