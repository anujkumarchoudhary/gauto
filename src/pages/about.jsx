import AboutUs from '@/components/about/AboutUs'
import RentCar from '@/components/about/RentCar'
import CommonBanner from '@/components/CommonBanner'
import OurMembers from '@/components/OurMembers'
import WantToEarn from '@/components/WantToEarn'
import React from 'react'

const About = () => {
  return (
    <div>
      <CommonBanner title={"About"} name={"about"}/>
      <AboutUs/>
      <RentCar/>
      <WantToEarn/>
      <OurMembers/>
    </div>
  )
}

export default About
