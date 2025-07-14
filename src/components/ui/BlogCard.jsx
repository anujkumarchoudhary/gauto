import Image from 'next/image'
import React from 'react'
import Icons from './Icons'
import img from '../../../public/assets/images/blog-1.a096363c44cf6e780297.jpg'
import Button from './Button'
const headPint = [
    {
        icon: "calendar",
        label: "Bizkit"
    },
    {
        icon: "user",
        label: "27 Aug, 2019"
    },
    {
        icon: "chat",
        label: "Comments"
    }
]
const BlogCard = ({ img, heading, description }) => {

    return (
        <div className='space-y-4 shadow-2xl'>
            <Image src={img} width={"100%"} height={"100%"} className='w-full h-auto object-cover' />
            <div className='p-5 space-y-4'>
                <p className='text-2xl font-bold'>{heading}</p>
                <div className='flex gap-2'>
                    {headPint?.map((item) => {
                        return (
                            <div className='flex gap-2'>
                                <Icons size={18} name={item?.icon} color='#EC3323' className='my-auto' />
                                <p>{item?.label}</p>
                            </div>
                        )
                    })}
                </div>
                <p>{description}</p>
                <Button name={"Read More"} isBorder={true} className={"w-fit"} />
            </div>
        </div>
    )
}

export default BlogCard
