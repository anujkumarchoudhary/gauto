import Image from 'next/image'
import React from 'react'
import download from '../../../public/assets/images/download.png'
import Icons from './Icons'

const data = ["We are a trusted name", "have a larger stock of vehicles", "we deal in have all brands", "we are at worldwide locations"]
const Heading = ({isStyleLabel,  label, name, isPrice, price, isDetails, details, description, isCheckPoint, isSignature }) => {
  return (
    <div>
      <p className={`font-bold ${isStyleLabel ? "bg-[#E3382A] text-white w-fit px-4 py-1 text-md" : "text-[#E3382A] text-lg"}`}>{label}</p>
      <p className='text-4xl font-bold leading-11 py-4'>{name}</p>
      {isPrice && <p className='text-lg font-bold pb-2'>{price} <span className='text-[#EC3323]'>/ Day</span></p>
      }
      <p className='leading-6'>{description}</p>
      {isCheckPoint && <div className='grid grid-cols-2 py-4'>
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
      {isDetails && <div className='grid grid-cols-3 gap-3 mt-4'>
        {
          details?.map((item) => {
            return (
              <div className='flex gap-2'>
                <Icons size={15} name={item?.icon} color='#EC3323' className='my-auto' />
                <p>{item.label}</p>
              </div>
            )
          })
        }</div>}
    </div>
  )
}

export default Heading
