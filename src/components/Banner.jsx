import React from 'react'
import Button from './ui/Button'

const Banner = () => {
    return (
        <div className='relative' style={{
            backgroundImage: 'url("/assets/images/slider-2.4cd97469474175a97a63.jpg")',
            backgroundColor: '#eee',
            backgroundPosition: '50%',
            backgroundSize: 'cover',
            height: '400px',
        }}>
            <div className='absolute text-white bottom-20 left-20 '>
                <p className='text-lg uppercase'>For rent $70 par day</p>
                <p className='text-4xl font-bold uppercase leading-12'>Reserved  now & get 50% off</p>
                <Button name={"RESERVE NOW!"} isBorder={true} className="w-fit mt-5"/>
            </div>
        </div>
    )
}

export default Banner
