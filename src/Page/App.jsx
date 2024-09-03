import React from 'react';
import Mainsection from './Mainsection';
import Searchbar from './Searchbar';
import Caricons from './Caricons.jsx';
import SVGIcons from './SVGIcons.jsx';
import Cards from './Cards.jsx';
// import Signin from '../Signin/Signin.jsx'
import Buysellcards from './Buysellcards.jsx';
import { SellMyCarBlock } from '../SellMyCarBlock.jsx';
// import { AboutUs } from '../../AboutUs.jsx';
export default function App() {
  return (
    <>
      <div className="aspect-w-16 aspect-h-9 bg-cover  bg-center" style={{ backgroundImage: "url('/images/bg1.jpg')" }}>
       <Mainsection />
      </div>
      <div className="aspect-w-16 aspect-h-9 bg-cover bg-slate-900 ">
        <Searchbar />
        <Caricons />
        <Cards />
        <Buysellcards />
        <SellMyCarBlock/>
        <SVGIcons />
        
        {/* <Signin/> */}
        
      </div>
    </>
  );
}
