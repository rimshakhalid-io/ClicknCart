import React from 'react';
import { TiTick } from "react-icons/ti";

const Buysellcards = () => {
    return (
        <div className="container mx-auto py-8">
            <h2 className="ml-6 title-font lg:text-3xl mb-6 mt-8 font-medium text-white">Buy and Sell  Mobile</h2>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:flex md:flex-col md:items-center">
                <h2 className="text-2xl text-orange-600 font-semibold mt-4 mb-4">Sell Your Mobile on ClicknCart and Get the Best Price</h2>
                <div className="flex flex-col md:flex-row justify-center items-center w-full">
                    <div className="w-full md:w-1/2 mx-2 mb-4 md:mb-0 flex flex-col items-center">
                        <h3 className="text-xl text-teal-200 font-semibold mb-2 text-center">Post your Ad on ClicknCart</h3>
                        <div className="flex items-start justify-center mb-2">
                            <TiTick className="mr-2 text-white mt-1" /> {/* Adjust margin as needed */}
                            <p className="text-center text-white md:w-64">Post your Ad for free in 3 easy steps</p> {/* Adjust width as needed */}
                        </div>
                        <div className="flex items-start justify-center mb-2">
                            <TiTick className="mr-2 text-white mt-1" /> {/* Adjust margin as needed */}
                            <p className="text-center text-white md:w-64">Get Genuine offers from Verified Buyers</p> {/* Adjust width as needed */}
                        </div>
                        <div className="flex items-start justify-center">
                            <TiTick className="mr-2 text-white mt-1" /> {/* Adjust margin as needed */}
                            <p className="text-center text-white  mb-4 md:w-64">Sell Your Mobile Fast at Best Price</p> {/* Adjust width as needed */}
                        </div>
                        <button className=" bg-orange-700 hover:bg-red-400 text-white font-bold py-2 px-4 rounded">Get Inspection</button> {/* Add button */}

                    </div>

                    <div className="border-l border-gray-300 h-20 mx-4 hidden md:block"></div>
                    <p className="mx-4 text-white">OR</p>
                    <div className="border-l border-gray-300 h-20 mx-4 hidden md:block"></div>

                    <div className="w-full md:w-1/2 mx-2 flex flex-col items-center">
                        <h3 className="text-xl text-cyan-400 font-semibold mb-2 text-center">Try ClicknCart sell it for Me</h3>

                        <div className="flex items-start justify-center mb-2">
                            <TiTick className="mr-2 text-white mt-1" /> {/* Adjust margin as needed */}
                            <p className="text-center text-white md:w-64">Post your Ad for free in 3 easy steps</p> {/* Adjust width as needed */}
                        </div>
                        <div className="flex items-start justify-center mb-2">
                            <TiTick className="mr-2 text-white mt-1" /> {/* Adjust margin as needed */}
                            <p className="text-center text-white md:w-64">Get Genuine offers from Verified Buyers</p> {/* Adjust width as needed */}
                        </div>
                        <div className="flex items-start justify-center">
                            <TiTick className="mr-2 text-white mt-1" /> {/* Adjust margin as needed */}
                            <p className="text-center text-white md:w-64">Sell Your Mobile Fast at Best Price</p> {/* Adjust width as needed */}
                        </div>

                        <button className="mt-4 bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">Post Add</button> {/* Add button */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Buysellcards;

