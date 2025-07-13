import React from 'react'
import Heading from './ui/Heading'
import ImageRenderer from './ui/ImageRenderer'
import { LatestServicesData } from '@/mockdata/LatestServicesData'

const LatestServices = () => {
  return (
    <div className='bg-[#FBFBFD] px-[5%] py-[3rem]'>
      <Heading label={"See Our"} name={"Latest Services"} />
      <div className='grid grid-cols-3 gap-3'>
        {LatestServicesData?.map((item) => {
          return (
            <div className='bg-white shadow p-6'>
              <ImageRenderer name={item?.image} width={200} height={300} alt='dijfo' />
              <p className='text-2xl font-bold py-4'> {item?.name}</p>
              <p className=''> {item?.description}</p>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default LatestServices
