import React from 'react';

export default function Searchbar() {
  return (
    <>
      <div>
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 bg-slate-900 p-4 rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="border border-white rounded-l px-4 py-2 focus:outline-none focus:ring bg-slate-900 text-white w-48"
          />
          <input
            type="text"
            placeholder="Search by Model"
            className="border border-white rounded-l px-4 py-2 focus:outline-none focus:ring bg-slate-900 text-white w-48"
          />
          <input
            type="text"
            placeholder="Search by Price"
            className="border border-white rounded-l px-4 py-2 focus:outline-none focus:ring bg-slate-900 text-white w-48"
          />
          <input
            type="text"
            placeholder="Search by Type"
            className="border border-white rounded-l px-4 py-2 focus:outline-none focus:ring bg-slate-900 text-white w-48"
          />
          

          <button className="bg-orange-700 text-white px-4 py-2 rounded hover:bg-red-400 w-48">
            Search
          </button>
        </div>
      </div>
      <h2 className=" ml-6 title-font lg:text-3xl  mb-6 mt-8 font-medium text-white">Popular Mobile body types</h2>
    </>
  );
}
