import React from 'react'

export default function Dropdown() {
  return (

    <>

      <div class="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 bg-black p-4 rounded-lg">
        <input type="text" placeholder="Search..." class="border border-white rounded-l px-4 py-2 focus:outline-none focus:ring bg-black text-white" />

        <select class="border border-gray-300 rounded-r px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 text-white bg-black lg:w-auto">
          <option value="" selected disabled class="bg-black">I PHONE</option>
          <option value="filter1" class="bg-black">iPhone 13</option>
          <option value="filter2" class="bg-black">iPhone 7</option>
          <option value="filter3" class="bg-black">iPhone 14</option>
          <option value="filter4" class="bg-black">iPhone X r</option>
          <option value="filter5" class="bg-black">iPhone X's</option>
        </select>

        <select class="border border-gray-300 rounded-r px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 text-white bg-black lg:w-auto">
          <option value="" selected disabled class="bg-black">SAMSUNG</option>
          <option value="filter1" class="bg-black">Samsung Galaxy A15</option>
          <option value="filter2" class="bg-black">Samsung Galaxy A34 </option>
          <option value="filter3" class="bg-black">Samsung Galaxy M20</option>
          <option value="filter4" class="bg-black">Samsung Galaxy S24 Ultra</option>
          <option value="filter5" class="bg-black">Samsung Galaxy Z Fold 5</option>
        </select>

        <select class="border border-gray-300 rounded-r px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 text-white bg-black lg:w-auto">
          <option value="" selected disabled class="bg-black">OPPO</option>
          <option value="filter1" class="bg-black">OPPO A17</option>
          <option value="filter2" class="bg-black">OPPO A77s</option>
          <option value="filter3" class="bg-black">Oppo A58</option>
          <option value="filter4" class="bg-black">Oppo A78</option>
          <option value="filter5" class="bg-black">Oppo A79</option>
        </select>

        <select class="border border-gray-300 rounded-r px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 text-white bg-black lg:w-auto">
          <option value="" selected disabled class="bg-black">VIVO</option>
          <option value="filter1" class="bg-black">Vivo Y27s</option>
          <option value="filter2" class="bg-black">Vivo Y17s</option>
          <option value="filter3" class="bg-black">Vivo Y23</option>
          <option value="filter4" class="bg-black">Vivo X90</option>
        </select>

        <button class="bg-orange-700 text-white px-4 py-2 rounded hover:bg-red-400 w-full lg:w-auto">Search</button>
      </div>





    </>
  )
}
