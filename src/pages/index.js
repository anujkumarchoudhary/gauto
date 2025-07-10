import React from 'react'
import TopHeader from './components/layout/TopHeader'
import Header from './components/layout/Header'
import Banner from './components/Banner'
import AboutUs from './components/AboutUs'
import LatestServices from './components/LatestServices'
import WantToEarn from './components/WantToEarn'
import HotOffers from './components/HotOffers'
import Testimonial from './components/Testimonial'
import OurMembers from './components/OurMembers'
import OurBlog from './components/OurBlog'

const index = () => {
  return (
    <div className=''>
      <TopHeader />
      <Header />
      <Banner />
      <AboutUs />
      <LatestServices />
      <WantToEarn />
      <HotOffers />
      <Testimonial />
      <OurMembers />
      <OurBlog />
    </div>
  )
}

export default index
