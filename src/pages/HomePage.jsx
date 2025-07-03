import React from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className="relative">
      <NavBar />
      <Banner />
      <Services />
      <Footer />
    </div>
  )
}

export default HomePage
