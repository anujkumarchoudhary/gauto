import Heading from '@/components/ui/Heading'
import Image from 'next/image'
import React from 'react'
import car from '../../public/assets/images/booking.bca01930a6766f442eb8.jpg'
import InputField from '@/components/ui/InputField'
import RadioButton from '@/components/ui/RadioButton'
import Button from '@/components/ui/Button'
import creditcard from '../../public/assets/images/creditcard.jpg'
import paypal from '../../public/assets/images/paypal.jpg'
import SelectField from '@/components/ui/SelectField'
import Description from '@/components/ui/Description'

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
        <div className=''>
            <div className='grid grid-cols-2 gap-5 px-[5%] py-[4rem] bg-[#FBFBFB]'>
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
            <div className='grid grid-cols-3 gap-4 px-[5%] py-[4rem]'>
                <div className='col-span-2 space-y-4'>
                    <div>
                        <p className='text-xl border-b border-b-slate-200 pb-2 font-bold mb-5'>Personal Information</p>
                        <div className=' grid grid-cols-2 gap-5'>
                            <InputField placeholder={"Your full name"} />
                            <InputField placeholder={"Your full name"} />
                            <InputField placeholder={"Your full name"} />
                            <InputField placeholder={"Your full name"} />
                        </div>
                    </div>
                    <div className=''>
                        <p className='text-xl border-b border-b-slate-200 pb-2 font-bold mb-5'>Booking Details</p>
                        <div className='grid grid-cols-2 gap-5'>
                            <InputField placeholder={"From Address"} />
                            <InputField placeholder={"To Address"} />
                            <SelectField />
                            <SelectField />
                            <InputField type={"date"} placeholder={"Journey Date"} />
                            <InputField type={"time"} placeholder={"Journey Time"} />
                        </div>
                        <Description placeholder={"Write Here..."} />
                    </div>
                </div>
                <div className='space-y-3'>
                    <p className='text-xl border-b border-b-slate-200 pb-2 font-bold mb-5'>Payment Method</p>
                    <RadioButton name={"Direct Bank Transfer"} />
                    <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference.order won’t be shipped until the funds have cleared.</p>
                    <RadioButton name={"Direct Bank Transfer"} />
                    <div className='flex justify-between'>
                        <RadioButton name={"Credit Card"} />
                        <Image src={creditcard} width={200} height={200} />
                    </div>
                    <div className='flex justify-between'>
                        <RadioButton name={"Paypal"} />
                        <Image src={paypal} width={"100%"} height={"100%"} />
                    </div>
                    <div className='flex justify-end mt-[2rem]'>
                        <Button name={"Reserve Now!"} isBorder={true} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CarBooking
