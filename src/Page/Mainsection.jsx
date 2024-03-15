import React from 'react'

export default function Mainsection() {
  return (
    <>

      <section className="text-white body-font">
        <div className=" mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font lg:text-5xl text-3xl mb-4 font-medium text-white">Easy way to find the right car

              {/* <br className="hidden lg:inline-block">readymade gluten</br> */}
            </h1>
            <p className="mb-8 leading-relaxed">Finder is a leading digital marketplace for the automotive industry that connects car shoppers with sellers.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-orange-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-400 rounded text-lg">New</button>
              <button className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">Used</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="\public\images\pic3.png" />
          </div>




        </div>
      </section>
      
    </>
  )
}
