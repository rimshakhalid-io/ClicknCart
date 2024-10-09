import { CiMobile1 } from "react-icons/ci";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="#"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={` text-center mt-8 mb-8 block w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 max-w-sm p-6 bg-gray-900 border rounded-lg shadow hover:bg-gray-800
         dark:bg-gray-800 dark:border-gray-800
          dark:hover:bg-gray-800 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 m-20 ${isHovered ? "border-gray-900" : "border-transparent"
        }`}
      style={{ boxSizing: 'content-box' }}
    >
      {/* Container to center the icon */}
      <div className="flex justify-center items-center">
        <CiMobile1 style={{ width: '70px', height: '50px', color: 'white' }} />
      </div>
      {/* Text below the icon */}
      <div className="mt-2 text-white">{text}</div>
    </a>
  );
};

export default function CardGrid() {
  const texts = ["I-Phone", "Redmi", "Samsung", "Vivo", "OPPO", "Apple", "Huawei", "Tecno"];

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center">
        {texts.map((text, index) => (
          <Link to="/side-navbar"><Card key={index} text={text} /></Link>
        ))}
      </div>
    </div>

  );
}
