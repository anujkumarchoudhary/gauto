import React from 'react'
import SaleAndPurchaseButton from './SaleAndPurchaseButton'
import Image from 'next/image'
import car from '../../../public/assets/images/nissan.png'
import Icons from './Icons'

const CarCard = ({ name,price, item,  }) => {
    console.log(item,"item>>")
    return (
        <div className='shadow p-5 '>
            <Image src={car} width={200} height={200} alt='sidf' />
            <p className='text-2xl font-bold mb-[0.5rem] mt-[2rem]'>{name}</p>
            <p className='text-lg font-bold '>{price} <span className='text-[#EC3323]'>/ Day</span></p>
            <div className='flex gap-2 my-[1rem]'>
                {item?.map((detail, i) => (
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
}

export default CarCard
