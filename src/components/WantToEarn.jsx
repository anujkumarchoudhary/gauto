import React from 'react'
import ImageRenderer from './ui/ImageRenderer'
import image22 from '../../../public/assets/images/WantToEarn.png'
import Image from 'next/image'
import Button from './ui/Button'
const WantToEarn = () => {
  return (
    <div className='bg-yellow-50 flex justify-between px-[5%] py-[4rem]'>
      <div className='w-[40%]'>
        <Image src={image22} width={"100%"} height={"100%"} alt='' />
      </div>
      <div className='w-[50%] my-auto'>
        <p className='text-4xl font-bold leading-11'>Do You Want To Earn With Us? So Don't be Late.</p>
        <Button name={"BECOME A DRIVER"} isBorder={true} className={"w-fit mt-4"} />
      </div>
    </div>
  )
}

export default WantToEarn
