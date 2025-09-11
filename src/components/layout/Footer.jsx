import React from 'react'
import { FooterData } from '@/mockdata/FooterData'
import Image from 'next/image'
import logo from '../../../public/assets/images/footerLogo.png'
import post from '../../../public/assets/images/recent_blog.jpg'

const Footer = () => {
    const { desc, headOffice } = FooterData?.brand
    const { links } = FooterData?.quickLink

    return (
        <div className='px-[5%] block md:flex justify-start md:justify-between py-[4rem] text-white bg-[#000000]'>
            <div className='w-[100%] md:w-[32%]'>
                <Image src={logo} width={200} height={200} />
                <p className='mt-[1.5rem]'>{desc}</p>
                <p className='text-lg font-bold my-3 border-b-2 border-b-[#EC3323] w-fit'>Head office</p>
                <div>
                    <p>Address:{headOffice?.address}</p>
                    <p>Phone{headOffice?.phone}</p>
                    <p>Emil:{headOffice?.email}</p>
                    <p>Office Time{headOffice?.OfficeTime}</p>
                </div>
            </div>
            <div className='w-[100%] md:w-[32%]' >
                <p className='text-lg font-bold my-3 border-b-2 border-b-[#EC3323] w-fit'>Head office</p>
                <div className='grid grid-cols-2 mt-[1.5rem]'>
                    {links?.map((item) => {
                        return <p className='py-[0.125rem]'>{item?.label}</p>
                    })}
                </div>
            </div>
            <div className='w-[100%] md:w-[32%]'>
                <p className='text-lg font-bold my-3 border-b-2 border-b-[#EC3323] w-fit'>Head office</p>
                <div className='mt-[1.5rem]'>
                    {FooterData?.recentPost?.map((item) => {
                    return (
                        <div className='flex gap-2 my-[0.75rem]'>
                            <Image src={post} width={100} height={100} alt='fe' />
                            <div>
                                <p>Revealed: {item?.heading}</p>
                                <p className='text-[#EC3323]'>Posted on: {item?.date}</p>

                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Footer
