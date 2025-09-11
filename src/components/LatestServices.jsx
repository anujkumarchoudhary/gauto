import React from 'react'
import Heading from './ui/Heading'
import ImageRenderer from './ui/ImageRenderer'
import { LatestServicesData } from '@/mockdata/LatestServicesData'
import Card from './ui/Card'
const LatestServices = () => {
  return (
    <div className='bg-[#FBFBFD] px-[5%] py-[3rem]'>
      <Heading label={"See Our"} name={"Latest Services"} />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {LatestServicesData?.map((item) => {
          return (
            <div className='bg-white shadow p-6'>
              <Card label={item?.label} name={item?.name} description={item?.description} />
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default LatestServices
