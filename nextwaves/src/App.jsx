import { useState } from 'react'
import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
import TrustedBy from './Components/TrustedBy';
import Services from './Components/Services';
import OurWork from './Components/OurWork';
import Testimonial from './Components/Testimonial';
import Blog from './Components/Blog';
import ContactUs from './Components/ContactUs';
import { Toaster } from 'react-hot-toast'
import Footer from './Components/Footer';
import Chatbot from './Components/Chatbot';

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');



  return (
    <div className='dark:bg-black relative'>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Testimonial />
      <Blog />
      <ContactUs />
      <Footer theme={theme} />
      <Chatbot className='z-50' theme={theme} />

    </div>
  )
}

export default App