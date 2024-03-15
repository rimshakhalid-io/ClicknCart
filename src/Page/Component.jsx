import React from 'react'
import Navbar from './Navbar'
import Mainsection from './Mainsection'
import Dropdown from './Dropdown'
import Extrapracticepage from '../Extrapracticepage'

export default function Component() {
  return (
    <div>
    <div className=" bg-black ">
      <Navbar/>
      <Mainsection/>
      <Dropdown/>
      <Extrapracticepage/>
    </div>
    </div>
  )
}
