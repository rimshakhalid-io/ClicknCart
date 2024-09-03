import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Page/App'
import './index.css'
import Signin from './Signin/Signin'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import AboutUs from '../AboutUs'

import Footer from './Footer'
import { Signup } from './Signin/Signup'
import ContactUs from './Page/ContactUs'
// import UpcomingPhone from './UpcomingPhone'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    {/* <App /> */}
    <Navbar/>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/signin' element={<Signin />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/Signup' element={<Signup/>}/>
        {/* <Route path='/blog' element={<Blog />} /> */}
        {/* <Route path='/upcomingphone' element={<UpcomingPhone />} /> */}
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>
      <Footer/>
    
       </BrowserRouter>
  </React.StrictMode>,
)
