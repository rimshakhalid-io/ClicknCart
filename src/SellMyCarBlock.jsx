import React from 'react'
import { FaTwitter } from "react-icons/fa";
export const SellMyCarBlock = () => {
    return (
        <>
            <div className="container bg-gray-800 mx-auto py-8">
                <section class="text-gray-600 body-font">
                    <div class="container  pr-5  py-24 mx-auto flex items-center md:flex-row flex-col">
                        <div class="flex flex-col mx-4 md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                            <h2 class="ml-6 mr-6 title-font lg:text-4xl mb-6 mt-8 font-medium text-white">Mobile Sale in 24 Hours</h2>
                            <h1 class="ml-6 mr-6 title-font text-gray-200">Calculate your mobile's value, then choose how you want to sell it.</h1>
                            <button class="ml-6 mt-5 bg-orange-700 hover:bg-red-400 text-white w-40 font-bold py-2 px-4 rounded">Sell My Phone</button>
                        </div>
                        <div class="text-white mx-4 flex flex-col items-center"> 
                            <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none mt-2"> 
                                <a class="text-gray-500"><FaTwitter /></a>
                            </button>
                            <span class="title-font font-medium mt-2">Vetted Buyers</span> 

                        </div>
                        <div class="text-white mx-4 flex flex-col items-center"> 
                            <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none mt-2"> 
                                <a class="text-gray-500"><FaTwitter /></a>
                            </button>
                            <span class="title-font font-medium mt-2">Vetted Buyers</span> 

                        </div>
                        <div class="text-white mx-4 flex flex-col items-center"> 
                            <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none mt-2"> 
                                <a class="text-gray-500"><FaTwitter /></a>
                            </button>
                            <span class="title-font font-medium mt-2">Vetted Buyers</span> 

                        </div>
                        <div class="text-white mx-4 flex flex-col items-center"> 
                            <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none mt-2"> 
                                <a class="text-gray-500"><FaTwitter /></a>
                            </button>
                            <span class="title-font font-medium mt-2">Vetted Buyers</span> 

                        </div>

                       

                       
                    </div>
                </section >
            </div >
        </>
    )
}
