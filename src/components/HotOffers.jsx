import React from 'react'
import Heading from './ui/Heading'
import Icons from './ui/Icons'
import Image from 'next/image'
import car from '../../public/assets/images/nissan.png'
import SaleAndPurchaseButton from './ui/SaleAndPurchaseButton'
import { HotOffersData } from '@/mockdata/HotOffersData'

const HotOffers = () => {
    return (
        <div className='px-[5%] py-[4rem]'>
            <Heading label={"Come with"} name={"Hot offers"} />
            <div className='flex  gap-2'>
                {HotOffersData?.tabs?.map((item) => {
                    return (
                        <div className='bg-slate-100 px-5 py-1.5 cursor-pointer'>
                            {item}
                        </div>
                    )
                })}
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {HotOffersData?.offers?.map((item) => {
                    return (
                        <div className='shadow p-5 mt-[2rem] '>
                            <Image src={car} width={200} height={200} alt='sidf' />
                            <p className='text-2xl font-bold mb-[0.5rem] mt-[2rem]'>{item?.name}</p>
                            <p className='text-lg font-bold '>{item?.price} <span className='text-[#EC3323]'>/ Day</span></p>
                            <div className='flex gap-2 my-[1rem]'>
                                {item?.details?.map((detail, i) => (
                                    <div key={i} className="text-sm flex">
                                        <Icons size={16} name={detail?.icon} color='#EC3323' className='my-auto mx-1' />
                                        {detail.model && <p className='whitespace-nowrap'> Model: {detail.model}</p>}
                                        {detail.automatic && <p className='whitespace-nowrap'>  {detail.automatic}</p>}
                                        {detail.mpl && <p className='whitespace-nowrap'> {detail.mpl}</p>}
                                    </div>
                                ))}</div>
                            <SaleAndPurchaseButton />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HotOffers
