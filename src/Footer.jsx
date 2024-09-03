import React from 'react';
import { MdOutlineSmartphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdEditAttributes } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
export default function Footer() {
  return (
    <>
      <footer className="text-gray-200 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-9">
            {/* Placeholder and Button */}
            <div className="col-span-1 md:col-span-1">
              <div className="relative w-full sm:w-auto ml-2  sm:mr-4 mr-2">
                <h2 className="title-font font-medium text-gray-200 gap-9 text-mid tracking-widest  "><b>Subscribe to our newsletter!</b></h2>

                <label htmlFor="footer-field" className="leading-8 text-sm mb-6 text-gray-200">
                  Don't miss any relevant offers!</label>

                <div className="flex mt-4 ">
                  <input type="text" id="footer-field" name="footer-field"
                    className="w-full sm:w-40 mb-4 bg-gray-800 bg-opacity-50 rounded 
                   border focus:ring-2 focus:bg-transparent focus:ring-indigo-200 
                   text-base outline-none text-gray-700 py-1 px-3 sm:px-8 mr-2 leading-8
                    transition-colors duration-200 ease-in-out" />
                  <button className="inline-flex mb-4 text-white bg-orange-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-400 rounded ">
                    <SiMinutemailer  className="h-6 w-8" />
                  </button>

                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="col-span-3 md:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {/* Category 2 */}
                <div>
                  <h2 className="title-font font-medium text-gray-200 gap-9 tracking-widest text-sm mb-3"><b>Mobile By Model</b></h2>
                  <nav className="list-none">
                    <li><a className="text-gray-400 hover:text-gray-500">I-Phone</a></li>
                    <li><a className="text-gray-400 hover:text-gray-500">Tecno</a></li>
                    <li><a className="text-gray-400 hover:text-gray-500">OPPO</a></li>
                    <li><a className="text-gray-400 hover:text-gray-500">Vivo</a></li>
                    <li><a className="text-gray-400 hover:text-gray-500">Casio</a></li>

                  </nav>
                </div>

                {/* Category 3 */}
                <div>
                  <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3"><b>Mobiles By City</b></h2>
                  <nav className="list-none">
                    <li><a className="text-gray-400 hover:text-gray-500"> Mobiles In Multan</a></li>
                    <li><a className="text-gray-400 hover:text-gray-500"> Mobiles In Lahore</a></li>
                    <li><a className="text-gray-400 hover:text-gray-500"> Mobiles In Sialkot</a></li>
                    <li><a className="text-gray-400 hover:text-gray-500"> Mobiles In Islamabad</a></li>
                    <li><a className="text-gray-400 hover:text-gray-500"> Mobiles In Karachi</a></li>

                  </nav>
                </div>

                {/* Category 4 */}
                <div>
                  <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3"><b>CATEGORIES4</b></h2>
                  <nav className="list-none">
                    <li><a className="text-gray-400 hover:text-gray-500">Add Listing</a></li>
                    <li><a className="text-gray-400 hover:text-gray-500">Add Listing</a></li>
                    <li><a className="text-gray-400 hover:text-gray-500">Add Listing</a></li>
                    <li><a className="text-gray-400 hover:text-gray-500">Add Listing</a></li>
                  </nav>
                </div>
                <div>
                  {/* <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">CATEGORIES3</h2> */}
                  <nav className="list-none ">
                    <li className="flex items-center space-x-2">
                      <MdOutlineSmartphone className="text-orange-700" />
                      <span className="text-white hover:text-gray-500">(406) 555-0120</span>
                    </li>
                    <li className="flex items-center space-x-2 mt-2">
                      <MdEmail className="text-orange-700" />
                      <span className="text-white hover:text-gray-500">example@gmail.com</span>
                    </li>


                    <li className="flex space-x-4 mt-6">
                      <a className="text-white hover:text-gray-500 hover:bg-orange-700" ><FaFacebook /></a>
                      <a className="text-white hover:text-gray-500 hover:bg-orange-700"><FaTwitter /></a>
                      <a className="text-white hover:text-gray-500 hover:bg-orange-700"><AiFillInstagram /></a>
                      <a className="text-white hover:text-gray-500 hover:bg-orange-700"><FaFacebookMessenger /></a>
                    </li>

                  </nav>

                </div>

              </div>
            </div>
          </div>
        </div>
        <div >
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 Shopping —
              <a href="" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@clicknCart</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0  justify-center sm:justify-start">
              <p className="text-gray-500 text-sm text-center sm:text-left">Terms of use
                Privacy policy
                Accessibility statement
                Interest based ads
                <a href="" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank"></a>
              </p>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}
