import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import OurStory from '../components/OurStory'
import Services from '../components/Services'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'


const AboutUsPage = () => {
  return (
    <div className=''>
      <NavBar  />
      {/* <Banner /> */}
      <div className='mt-24'>
      <OurStory itsHome={false} />
      </div>
      <Services />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default AboutUsPage
