import React from 'react'
import { BrowserRouter, Routes as RouterRoutes, Route, Outlet } from "react-router-dom";
// import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
// import Features from './components/Features/Features'
// import Footer from './components/Footer/Footer'
// import Testimonial from './components/Testimonial/Testimonial'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <>
      {/* <Route path="/navbar" element={<Navbar />} />
        <Route path="/features" element={<Features />}/>
        <Route path="/hero copy" element={<Hero />}/>
        <Route path="/testimonial" element={<Testimonial />}/>
        <Route path="/footer" element={<Footer />}/>
        <Route path="/footer" element={<Footer />}/> */}
      <Header />
      <Hero />
      <Footer />
    </>
  )
}

export default App
