import Heading from '@/components/ui/Heading'
import Image from 'next/image'
import React from 'react'
import car from '../../public/assets/images/booking.bca01930a6766f442eb8.jpg'
import InputField from '@/components/ui/InputField'

const data = [
    {
        icon: "car",
        label: "Model:2017"
    },
    {
        icon: "car",
        label: "Model:2017"
    },
    {
        icon: "car",
        label: "Model:2017"
    },
    {
        icon: "car",
        label: "Model:2017"
    },
    {
        icon: "car",
        label: "Model:2017"
    },
    {
        icon: "car",
        label: "Model:2017"
    },
    {
        icon: "car",
        label: "Model:2017"
    },
    {
        icon: "car",
        label: "Model:2017"
    },
    {
        icon: "car",
        label: "Model:2017"
    },
    {
        icon: "car",
        label: "Model:2017"
    },
    {
        icon: "car",
        label: "Model:2017"
    },
    {
        icon: "car",
        label: "Model:2017"
    }
]
const CarBooking = () => {
    return (
        <div className='px-[5%] py-[4rem]'>
            <div className='grid grid-cols-2 gap-5'>
                <Image src={car} width={"100%"} height={"100%"} alt='fje' />
                <div>
                    <Heading
                        isStyleLabel={true}
                        label={"Rental"}
                        name={"Mercedes S-class"}
                        isPrice={true}
                        price={"$125,24.00"}
                        isDetails={true}
                        details={data}
                        description={"consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem vulputate interdum et vel eros. Maecenas eros enim, tincidunt vel turpis vel,dapibus tempus nulla. Donec vel nulla dui."} />
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <div className='cols-'>
                    <p>Personal Information</p>
                    <div className='grid grid-cols-2 gap-5'>
                        <InputField placeholder={"Your full name"} />
                        <InputField placeholder={"Your full name"} />
                        <InputField placeholder={"Your full name"} />
                        <InputField placeholder={"Your full name"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarBooking
