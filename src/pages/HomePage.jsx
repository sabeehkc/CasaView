import React from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Footer from '../components/Footer'
import ShortProperties from '../components/ShortProperties'
import OurStory from '../components/OurStory'
import Testimonial from '../components/Testimonial'


const HomePage = () => {
  return (
    <div className="relative">
      <NavBar />
      <Banner />
      <Services />
      <ShortProperties />
      <OurStory itsHome={true} />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default HomePage
