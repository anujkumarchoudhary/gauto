import React from 'react'
import img_1 from '../../public/assets/images/gallery-1.jpg'
import img_2 from '../../public/assets/images/gallery-2.660b45df6b85351eefa5.jpg'
import img_3 from '../../public/assets/images/gallery-3.a691a262eb746b88c0ab.jpg'
import img_4 from '../../public/assets/images/gallery-5.4fd900f27ffdd44c5bd3.jpg'
import Image from 'next/image'
import Button from './ui/Button'

const GallerySection = () => {
    const images = [img_1, img_2, img_3, img_4, img_1, img_2]
    return (
        <div className='px-[5%] py-[4rem]'>
            <div className='grid grid-cols-3 gap-5'>
                {images?.map((item) => {
                    return (
                        <Image src={item} width={"100%"} height={"100%"} alt='image' />
                    )
                })}
            </div>
            <div className='flex justify-center mt-[2rem]'>
                <Button name={"More Picture"} isBorder={true} className={"w-[14rem]"} />
            </div>
        </div>
    )
}

export default GallerySection
