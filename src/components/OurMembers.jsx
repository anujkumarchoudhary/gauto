import React from 'react'
import Heading from './ui/Heading'
import Image from 'next/image'
import sherry from '../../public/assets/images/john.jpg'
import { OurMembersData } from '@/mockdata/OurMembersData'

const OurMembers = () => {
    return (
        <div className='px-[5%] my-[4rem]'>
            <Heading label={"Expert"} name={"our Members"} />
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-[2rem]'>
                {OurMembersData?.map((item) => {
                    return (
                        <div className='shadow'>
                            <Image src={sherry} width={"100%"} height={"100%"} alt='nwq' />
                            <div className='p-4'> 
                                <p className='text-lg font-bold'>{item?.name}</p>
                            <p>{item?.experience}</p>
                                </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default OurMembers
