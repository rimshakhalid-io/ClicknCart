import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Page/App'
import './index.css'
import Signin from './Signin/Signin'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import AboutUs from '../AboutUs'
import Terms from './Page/Terms'
import Footer from './Footer'
import { Signup } from './Signin/Signup'
import ContactUs from './Page/ContactUs'
import Sidenavbar from './Components/Sidenavbar'
import Upcomingphone from './Page/Upcomingphone'
import Newlaunch from './Page/Newlaunch'
import New from './Page/Mainsectionlinks/New'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      {/* <App /> */}
      <Navbar />

      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/Signup' element={<Signup />} />
        {/* <Route path='/blog' element={<Blog />} /> */}
        <Route path='/upcomingphone' element={<Upcomingphone />} />
        <Route path='/newlaunch' element={<Newlaunch />} />

        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/new-items' element={<New />} />
        <Route path='/side-navbar' element={<Sidenavbar />} />
        {/* <Route path='/contactus' element={<ContactUs />} /> */}

      </Routes>
      <Footer />

    </BrowserRouter>
  </React.StrictMode>,
)
