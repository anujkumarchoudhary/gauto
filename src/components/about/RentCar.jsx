import React from 'react'
import Heading from '../ui/Heading'
import Image from 'next/image'
import rent_car from '../../../public/assets/images/nissan.png'
const RentCar = () => {
    return (
        <div className='px-[5%] py-[4rem] bg-slate-50'>
            <Heading label={"Rent Car Now!"} name={"We are proud of our business."} />
            <div className='flex justify-center items-center'>
                <Image src={rent_car} width={"100%"} height={"100%"} alt='e' />
            </div>
        </div>
    )
}

export default RentCar
