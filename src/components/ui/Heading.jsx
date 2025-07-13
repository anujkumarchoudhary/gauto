import Image from 'next/image'
import React from 'react'
import download from '../../../public/assets/images/download.png'

const data = ["We are a trusted name", "have a larger stock of vehicles", "we deal in have all brands", "we are at worldwide locations"]
const Heading = ({label, name, description,isCheckPoint,isSignature}) => {
  return (
    <div>
      <p className='text-lg font-bold text-[#E3382A]'>{label}</p>
      <p className='text-4xl font-bold leading-15'>{name}</p>
      <p>{description}</p>
     {isCheckPoint &&  <div className='grid grid-cols-2 py-4'>
        {data?.map((item) => {
          return (
            <div className='flex gap-2 py-1'>
              <input type='checkbox' />
              <p>{item}</p>
            </div>
          )
        })}
      </div>}
      {isSignature && <div className='flex gap-4'>
        <div className='border-r-2 border-r-gray-200 pr-2'><Image src={download} width={160} height={160} alt='gy' /></div>
        <div>
          <p>Robertho Garcia</p>
          <p>resident</p>
        </div>
      </div>}
    </div>
  )
}

export default Heading
