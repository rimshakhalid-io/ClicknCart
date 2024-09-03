import React from 'react'
import { ImAccessibility } from "react-icons/im";

import { FaHandshakeSimple } from "react-icons/fa6";
import { HiLightBulb } from "react-icons/hi";


export default function AboutUs() {
  return (
    <>
      <section className="bg-slate-900 text-gray-600 body-font">
        <div className="container mx-auto flex py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src="public/images/aboutus4.png" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium  text-gray-200">About Us</h1>
            <p className="mb-8 text-gray-400 ml-3 leading-relaxed">We believe that mobile buying and selling should be straight-forward and enjoyable, not time-consuming, complicated or stressful. Choosing us means choosing convenience, reliability, and exceptional service. We understand the importance of staying connected in today's world, and we're here to make that connection as seamless as possible. Join our community of satisfied customers and experience the difference today.</p>
            <div className="flex">
              <button className="ml-4 inline-flex text-gray-100 bg-orange-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg">Search Mobile</button>
            </div>
          </div>
        </div>

        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-center text-gray-200">We are Growing so fast</h1>

        <div className="flex flex-wrap justify-center h-72">
          <div className="py-6 mx-4">
            <div className="w-full md:w-64 lg:w-64 xl:w-250px h-72 mx-auto">
              <div className="rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 h-full">
                <div className="bg-slate-800 border border-slate-800 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 h-full">
                  <div className="flex justify-center">
                    <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg mt-7 items-center hover:bg-gray-200 focus:outline-none">
                      <ImAccessibility className="text-gray-500" />
                    </button>
                  </div>
                  <div className="p-4 text-center h-full overflow-hidden">
                    <p className="mb-2 font-bold text-sm text-white dark:text-gray-400">Our Mission</p>
                    <p className="text-gray-400 text-xs font-semibold px-2 py-0.5 rounded">Our mission is to revolutionize the mobile phone marketplace by offering a secure, user-friendly, and efficient platform that caters to all your mobile needs. We strive to provide exceptional value and service, ensuring that every transaction is smooth and satisfactory.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-6 mx-4">
            <div className="w-full md:w-64 lg:w-64 xl:w-250px h-72 mx-auto">
              <div className="rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 h-full">
                <div className="bg-slate-800 border border-slate-800 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 h-full">
                  <div className="flex justify-center">
                    <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg mt-7 items-center hover:bg-gray-200 focus:outline-none">
                      <FaHandshakeSimple className="text-gray-500" />
                    </button>
                  </div>
                  <div className="p-4 text-center h-full overflow-hidden">
                    <p className="mb-2 font-bold text-sm text-white dark:text-gray-400">Customer Satisfaction:</p>
                    <p className="text-gray-400 text-xs font-semibold px-2 py-0.5 rounded">Your happiness is our success. We go above and beyond to meet and exceed your expectations. We continuously improve and innovate our platform to provide you with the best possible experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-6 mx-4">
            <div className="w-full md:w-64 lg:w-64 xl:w-250px h-72 mx-auto">
              <div className="rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 h-full">
                <div className="bg-slate-800 border border-slate-800 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 h-full">
                  <div className="flex justify-center">
                    <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg mt-7 items-center hover:bg-gray-200 focus:outline-none">
                      <HiLightBulb className="text-gray-500" />
                    </button>
                  </div>
                  <div className="p-4 text-center h-full overflow-hidden">
                    <p className="mb-2 font-bold text-sm text-white dark:text-gray-400">Our Vision</p>
                    <p className="text-gray-400 text-xs font-semibold px-2 py-0.5 rounded">We envision a world where access to reliable and affordable mobile technology is effortless and accessible to all. We aim to be the leading online destination for mobile phone transactions, setting the standard for quality, trust, and customer satisfaction in the industry.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}




