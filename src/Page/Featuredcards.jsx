import React from 'react';

export default function FeaturedCards(props) {
    let product = props.data
    let imageUrl = product.image
    if (!product.image) {
        imageUrl = ``
    }
    return (
        <div className="flex flex-wrap justify-center">

            <div className="px-2">
                <div className="w-full md:w-64">
                    <div className="rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="bg-slate-800 border border-slate-800 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img
                                    className="h-48 w-full object-cover rounded-t-lg"
                                    src={imageUrl}
                                    alt="product image"
                                />
                            </a>
                            <div className="p-4 md:p-5 flex flex-col items-center">
                                <a href="#">
                                    <h5 className="mb-1 md:mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-200 dark:text-white">
                                        {product.model}
                                    </h5>
                                </a>
                                <p className="mb-2 md:mb-3 font-bold text-sm md:text-base text-orange-700 dark:text-gray-400">
                                    {product.price}
                                </p>
                                <div className="flex items-center justify-center mt-1.5 md:mt-2.5 mb-3 md:mb-5">
                                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                        {/* Add rating stars here */}
                                    </div>
                                    <span className="bg-blue-100 text-orange-700 text-xs md:text-sm font-semibold px-2 py-0.5 rounded dark:bg-blue-200 dark:text-orange-700 ms-3">
                                        4.0 Reviews
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Link to={`/products/${product.id}`}> */}

            {/* </Link> */}
        </div>
    );
}
