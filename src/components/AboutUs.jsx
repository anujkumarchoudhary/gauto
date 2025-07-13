import React from 'react'
import Heading from './ui/Heading'
import Image from 'next/image'
import about from '../../public/assets/images/about.1044506a3d3cb06c91b2.png'

const AboutUs = () => {
  return (
    <div className='px-[5%] py-[3rem] flex justify-between'>
        <div className='w-[50%]'>
            <Heading label={"About Us"} name={"Welcome to gauto"} description={"Since 1992 we have not only committed ourselves to delivering exceptional repair and maintenance service to the worldwide automotive owners."} isCheckPoint={true} isSignature={true}/>
        </div>
        <div className='w-[50%]'>
            <Image src={about} width={"100%"} height={"100%"} alt=''/>
        </div>
      
    </div>
  )
}

export default AboutUs
