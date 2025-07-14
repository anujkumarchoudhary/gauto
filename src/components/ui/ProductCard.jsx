import React from 'react'
import productImg from '../../../public/assets/images/product-1.5fb206dcc3785a3a8a39.jpg'
import Image from 'next/image'
import Icons from './Icons'

const ProductCard = ({ name, price, icon }) => {
    return (
        <div>
            <Image src={productImg} width={"100%"} height={"100%"} alt='koe' />
            <div className='flex justify-between py-[1rem]'>
                <di>
                    <p className='text-xl font-bold'>{name}</p>
                    <p className='font-bold text-[#EC3323]'>{price}</p>
                </di>
                <Icons name={icon} />
            </div>

        </div>
    )
}

export default ProductCard
