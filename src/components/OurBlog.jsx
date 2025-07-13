import React from 'react'
import Heading from './ui/Heading'
import { OurBlogData } from './mockdata/OurBlogData'
import Image from 'next/image'
import blog from '../../../public/assets/images/blog.jpg'
import Icons from './ui/Icons'

const OurBlog = () => {
    return (
        <div className='px-[5%] py-[4rem] bg-slate-50'>
            <Heading label={"Latest"} name={"our blog"} />
            <div className='grid grid-cols-3 gap-5 mt-[2rem]'>
                {OurBlogData?.map((item) => {
                    return (
                        <div className='shadow'>
                            <Image src={blog} width={"100%"} height={"100%"} />
                            <div className='p-[1rem] divide-y-1 space-y-4'>
                                <p className='text-lg font-bold pb-2'>{item?.name}</p>
                                <section className='flex justify-between '>
                                    <p>{item?.date}</p>
                                    <div className='flex justify-between gap-4'>
                                        <p className='flex gap-1 my-auto'>
                                            <Icons color='#EC3323' size={18} className='my-auto' name={"view"} />
                                            {item?.views}
                                        </p>
                                        <p className='flex gap-1 my-auto'> <Icons color='#EC3323' size={18} className='my-auto' name={"chat"} /> {item?.comment}</p>
                                    </div>
                                </section></div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default OurBlog
