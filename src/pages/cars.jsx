import CarListingSection from '@/components/CarListingSection'
import CommonBanner from '@/components/CommonBanner'
import OurBlog from '@/components/OurBlog'
import OurMembers from '@/components/OurMembers'
import Testimonial from '@/components/Testimonial'
import React from 'react'

const CarListing = () => {
  return (
    <div>
      <CommonBanner />
      <CarListingSection />
      <Testimonial />
      <OurMembers />
      <OurBlog />
    </div>
  )
}

export default CarListing
