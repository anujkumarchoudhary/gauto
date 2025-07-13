import React from 'react'
import OurMembers from '@/components/OurMembers'
import OurBlog from '@/components/OurBlog'
import Banner from '@/components/Banner'
import AboutUs from '@/components/AboutUs'
import LatestServices from '@/components/LatestServices'
import WantToEarn from '@/components/WantToEarn'
import HotOffers from '@/components/HotOffers'
import Testimonial from '@/components/Testimonial'

const index = () => {
  return (
    <div className=''>
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
