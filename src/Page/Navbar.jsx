import React from 'react';

export default function Navbar() {
  return (
    <>
      <nav className='text-white'>
        <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img src="public\images\logo2.png" className="w-16 h-12" alt="Flowbite Logo" />
            <span className="ml-3 text-xl">Mobiles</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-8 hover:text-white">Home</a>
            <a className="mr-8 hover:text-white">Account </a>
            <div >
              <a
                // id="dropdownNavbarLink"
                // data-dropdown-toggle="dropdownNavbar"
                // className="flex items-center mr-5 justify-between w-full py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white md:dark:hover:bg-transparent"
              >
                {/* Catalog
                <svg
                  className="w-2.5 h-2.5 ms-2.5" aria-hidden="true"xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 10 6" >
                  <path stroke="currentColor"strokeLinecap="round"strokeLinejoin="round"strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg> */}
                <select  className="mr-3  bg-black " >
                {/* <a className=" bg-black " /> */}
                <option className=" bg-black " >Catalog</option>
                <option className=" bg-black " >MobilePhone</option>
                <option className=" bg-black " >Catalog</option>
              </select>
              </a>
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu" tabindex="-1" style={{display: 'none'}}>
                <div className="py-1" role="none">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-100 hover:text-gray-300" role="menuitem" tabindex="-1" id="options-menu-0">Home</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-100 hover:text-gray-300" role="menuitem" tabindex="-1" id="options-menu-1">About</a>
                </div>
              </div>
            </div>
            
            <a className="mr-8 hover:text-white">Pages</a>
            <a className="mr-8 hover:text-white">About us</a>
          </nav>
          <button className="ml-4 inline-flex text-gray-200  border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg"><b>Login</b></button>
          <button className="ml-4 inline-flex text-white bg-orange-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-400 rounded text-lg">+ Sell Phone</button>
        </div>
      </nav>
    </>
  );
}
