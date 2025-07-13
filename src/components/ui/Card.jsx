import Image from 'next/image'
import React from 'react'
import img from '../../../public/assets/images/clock.png'


export const Card = ({ label, name, description }) => {
    return (
        <div className='p-4'>
            <div className='flex justify-between'>
                <Image src={img} width={"100%"} height={"100%"} />
                <p className='text-2xl'>{label}</p>
            </div>
            <p className='text-xl font-bold pt-4 pb-3'>{name}</p>
            <p>{description}</p>

        </div>
    )
}

export default Card
