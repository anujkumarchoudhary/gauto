import Image from 'next/image'
import React from 'react'
import img from '../../public/assets/images/nissan.png'
import Icons from './ui/Icons'
import Button from './ui/Button'
const ProductDetailsSection = () => {
    return (
        <div className=' grid grid-cols-2 px-[5%] py-[4rem]'>
            <Image src={img} width={"100%"} height={"100%"} alt='e' />
            <div className='space-y-4'>
                <p className='text-3xl font-bold'>Car Disk Break</p>
                <div className='flex gap-2'>
                    <div className='flex gap-'>
                        <Icons color='#FFCD00' name={"star"} />
                        <Icons color='#FFCD00' name={"star"} />
                        <Icons color='#FFCD00' name={"star"} />
                        <Icons color='#FFCD00' name={"star"} />
                        <Icons color='#FFCD00' name={"star"} />
                    </div>
                    <p>(123 rating)</p>
                </div>
                <p>Cursus mal suada faci lisis. Lorem ipsum dolor.ipsum dolor sit amet, cons ectetur elit. Ves tibulum nec odios Suspe ndisse cursus mal suada faci lisis. Lorem ipsum dolor.ipsum dolor sit amet,.Lorem ipsum dolor.ipsum dolor sit amet, cons ectetur elit. Ves tibulum nec odios</p>
                <p className='text-xl font-bold'>Price: <span className='text-[#EC3323]'>$180</span> </p>
                <p className='text-xl font-bold'>Quantity: <span className='text-[#EC3323]'>1</span> </p>
                <div>
                    <Button name={"Add To Cart"} isBorder={true} className={"w-fit"} />
                </div>

            </div>
        </div>
    )
}

export default ProductDetailsSection
