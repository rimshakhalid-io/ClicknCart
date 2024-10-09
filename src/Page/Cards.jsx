import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FeaturedCards from './Featuredcards.jsx'

export default function Cards() {
    const [products, setProducts] = useState([]);

    async function fetchData() {
        try {
            let request = await fetch('http://localhost:8000/mobile');
            let response = await request.json();
            console.log(response);

            setProducts(response.myData);
        } catch (error) {
            console.error("Something went wrong on the server side.", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
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
                    {products?.map((product, index) => (
                        <div className="flex flex-wrap justify-center">
                            <div key={index} className="m-4 w-1/4 max-w-xs">
                                <FeaturedCards data={product} />

                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}
