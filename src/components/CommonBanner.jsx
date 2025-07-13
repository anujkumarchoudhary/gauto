import React from 'react'
import Icons from './ui/Icons'

const CommonBanner = () => {
    return (
        <div className='relative' style={{
            backgroundImage: 'url("/assets/images/slider-2.4cd97469474175a97a63.jpg")',
            backgroundColor: '#eee',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '365px',
        }}>
            <div className='absolute inset-0 flex flex-col items-center justify-center text-white text-center'>
                <p className='text-4xl font-bold uppercase leading-12'>About Us</p>
                <p className="flex items-center gap-2 whitespace-nowrap">
                    <Icons name={"home"} color='#EC3323' /> Home <Icons name={"arrowRight"} color='#EC3323' /> About
                </p>

            </div>
        </div>

    )
}

export default CommonBanner
