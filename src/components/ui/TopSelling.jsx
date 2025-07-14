import Image from 'next/image'
import React from 'react'
import img from '../../../public/assets/images/blog.jpg'

const data = [
    {
        name: "Disk break",
        price: "$12.00"
    },
    {
        name: "Shock Absorber",
        price: "$12.00"
    },
    {
        name: "Suspension",
        price: "$12.00"
    },
    {
        name: "Turbo oil",
        price: "$12.00"
    },
    {
        name: "Shock Absorber",
        price: "$12.00"
    },

]
const TopSelling = () => {
    return (
        <div className='space-y- divide-y-1 p-4  bg-[#F4F4F5]'>
            {data?.map((item) => {
                return (
                    <div className='flex gap-5 py-4 bg-[#FFFFFF]'>
                        <Image src={img} width={100} height={100} />
                        <div>
                            <p className='text-lg font-bold'>{item?.name}</p>
                            <p className='font-bold text-[#EC3323]'>{item?.price}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TopSelling
