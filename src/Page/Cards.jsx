import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Cards() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Change this value to adjust the duration
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <>
            
            <h2 className="ml-6 title-font lg:text-3xl mb-6 mt-8 font-medium text-white">Featured New Mobile</h2>
            <div className="container mx-auto px-2 sm:px-6 lg:px-8 py-6">
                <Slider {...settings}>
                    <div>
                      
                
                    {/* Card 1 */}
                    <div className="px-2">
                        <div className="w-full md:w-64">
                            <div className=" rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <div className="bg-slate-800 border border-slate-800  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img className="rounded-t-lg mt-7 w-full" src="\images\c11.png" alt="" />
                                    </a>
                                    <div className="p-4 md:p-5 justify-center">
                                        <a href="#">
                                            <h5 className="mb-1 md:mb-2 text-lg md:text-2xl flex justify-center font-bold tracking-tight text-gray-200 dark:text-white">Redmi A3</h5>
                                        </a>
                                        <p className="mb-2 md:mb-3 font-bold flex justify-center text-sm md:text-base text-orange-700 dark:text-gray-400">PKR 23.5K</p>
                                        <div className="flex items-center justify-center mt-1.5 md:mt-2.5 mb-3 md:mb-5">
                                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                                {/* Add rating stars here */}
                                            </div>
                                            <span className="bg-blue-100 text-orange-700 text-xs md:text-sm font-semibold px-2 py-0.5 rounded dark:bg-blue-200 dark:text-orange-700 ms-3">4.0 Reviews</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div>
                        {/* Card 2 */}
                        <div className="px-2"> {/* Adjust spacing between cards */}
                        <div className="w-full md:w-64">
                            <div className=" rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <div className="bg-slate-800 border border-slate-800  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img className="rounded-t-lg mt-7 w-full" src="\images\c11.png" alt="" />
                                    </a>
                                    <div className="p-4 md:p-5 justify-center">
                                        <a href="#">
                                            <h5 className="mb-1 md:mb-2 text-lg md:text-2xl flex justify-center font-bold tracking-tight text-gray-200 dark:text-white">Redmi A3</h5>
                                        </a>
                                        <p className="mb-2 md:mb-3 font-bold flex justify-center text-sm md:text-base text-orange-700 dark:text-gray-400">PKR 10.5K-23.5K</p>
                                        <div className="flex items-center justify-center mt-1.5 md:mt-2.5 mb-3 md:mb-5">
                                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                                {/* Add rating stars here */}
                                            </div>
                                            <span className="bg-blue-100 text-orange-700 text-xs md:text-sm font-semibold px-2 py-0.5 rounded dark:bg-blue-200 dark:text-orange-700 ms-3">4.0 Reviews</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div>
                    <div className="px-2"> {/* Adjust spacing between cards */}
                        <div className="w-full md:w-64">
                            <div className="rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <div className="bg-slate-800 border border-slate-800 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img className="rounded-t-lg mt-7 w-full" src="\images\c11.png" alt="" />
                                    </a>
                                    <div className="p-4 md:p-5 justify-center">
                                        <a href="#">
                                            <h5 className="mb-1 md:mb-2 text-lg md:text-2xl flex justify-center font-bold tracking-tight text-gray-200 dark:text-white">Redmi A3</h5>
                                        </a>
                                        <p className="mb-2 md:mb-3 font-bold flex justify-center text-sm md:text-base text-orange-700 dark:text-gray-400">PKR 10.5K-23.5K</p>
                                        <div className="flex items-center justify-center mt-1.5 md:mt-2.5 mb-3 md:mb-5">
                                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                                {/* Add rating stars here */}
                                            </div>
                                            <span className="bg-blue-100 text-orange-700 text-xs md:text-sm font-semibold px-2 py-0.5 rounded dark:bg-blue-200 dark:text-orange-700 ms-3">4.0 Reviews</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                       
                     

                    </div>
                    <div>
                        {/* Card 4 */}
                        <div className="px-2"> {/* Adjust spacing between cards */}
                        <div className="w-full md:w-64">
                            <div className=" rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <div className="bg-slate-800 border border-slate-800  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img className="rounded-t-lg mt-7 w-full" src="\images\c11.png" alt="" />
                                    </a>
                                    <div className="p-4 md:p-5 justify-center">
                                        <a href="#">
                                            <h5 className="mb-1 md:mb-2 text-lg md:text-2xl flex justify-center font-bold tracking-tight text-gray-200 dark:text-white">Redmi A3</h5>
                                        </a>
                                        <p className="mb-2 md:mb-3 font-bold flex justify-center text-sm md:text-base text-orange-700 dark:text-gray-400">PKR 10.5K-23.5K</p>
                                        <div className="flex items-center justify-center mt-1.5 md:mt-2.5 mb-3 md:mb-5">
                                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                                {/* Add rating stars here */}
                                            </div>
                                            <span className="bg-blue-100 text-orange-700 text-xs md:text-sm font-semibold px-2 py-0.5 rounded dark:bg-red-200 dark:text-orange-700 ms-3">4.0 Reviews</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>


                </Slider>
            </div>
        </>
    );
}









