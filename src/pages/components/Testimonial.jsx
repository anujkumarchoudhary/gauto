import React from 'react'
import { TestimonialData } from '@/pages/components/mockdata/TestimonialData'
import Heading from '@/pages/components/ui/Heading'
import Image from 'next/image'
import sherry from "../../../public/assets/images/sherry.jpg"
const Testimonial = () => {
  return (
    <div className='bg-[#080707] text-white px-[5%] py-[4rem]'>
      <Heading label={"Some words"} name={"Testimonial"} />
      <div className='grid grid-cols-3 gap-5 mt-[2rem]'>
        {TestimonialData?.map((item) => {
          return (
            <div className='bg-white text-black p-[2rem] bg-'>
              <p>{item?.message}</p>
              <section className='flex gap-2 mt-4'>
                <Image src={sherry} width={60} height={55} alt='idj' className='rounded-full' />
                <div>
                  <p className='text-lg font-bold'>{item?.name}</p>
                  <p>{item?.type}</p></div>
              </section>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Testimonial
