import Image from 'next/image'
import React from 'react'
import img from '../../public/assets/images/blog.jpg'
import Icons from './ui/Icons'
import InputField from './ui/InputField'
import Button from './ui/Button'
const headerData = [
    {
        label: "Preview"
    },
    {
        label: "Product"
    },
    {
        label: "Price"
    },
    {
        label: "Quantity"
    },
    {
        label: "Total"
    },
    {
        label: "Action"
    }
]
const tableData = [
    {
        image: img,
        name: "Preview",
        price: "$12.00",
        quantity: 1,
        total: 12
    },
    {
        image: img,
        name: "Preview",
        price: "$12.00",
        quantity: 1,
        total: 12
    },
]
const ShoppingCartSection = () => {
    return (
        <div className='grid grid-cols-3 gap-5 px-[5%] py-[4rem] '>
            <div className='col-span-2 space-y-6'>
                <p className='text-2xl font-bold'>Shopping Cart</p>
                <table className="table-auto w-full  border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            {headerData?.map((item) => {
                                return (
                                    <th className="border-b border-b-gray-200 font-normal px-4 text-left py-2">{item?.label}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData?.map((item) => {
                            return (
                                <tr>
                                    <td className="border-b border-b-gray-200 px-4 py-2">
                                        <Image src={item?.image} width={60} height={60} />
                                    </td>
                                    <td className="border-b border-b-gray-200 px-4 py-2">{item?.name}</td>
                                    <td className="border-b border-b-gray-200 px-4 py-2">{item?.price}</td>
                                    <td className="border-b border-b-gray-200 px-4 py-2">
                                        <InputField value={2} type={"number"} placeholder={"0"} className={"!w-15"} />
                                    </td>
                                    <td className="border-b border-b-gray-200 px-4 py-2">{item?.total}</td>
                                    <td className="border-b border-b-gray-200 px-4 py-2">
                                        <Icons name={"close"} />
                                    </td>
                                </tr>

                            )
                        })}

                    </tbody>
                </table>
                <div className='flex gap-4 font-bold'>
                    <p className='hover:text-[#EC3323] cursor-pointer'>Clear Cart</p>
                    <p className='hover:text-[#EC3323] cursor-pointer'>Update Cart</p>
                </div>
            </div>
            <div className='bg-[#F4F4F5] p-4 space-y-4'>
                <p className='text-2xl font-bold'>Order Summary</p>
                <div className='space-y-3  divide-y-1'>
                    <div className='flex justify-between py-2'>
                        <p>Cart Subtotal</p>
                        <p>	$270</p>
                    </div>
                    <div className='flex justify-between py-2'>
                        <p>Shipping and Handling</p>
                        <p>Free Shipping</p>
                    </div>
                    <div className='flex justify-between py-2'>
                        <p>Order Total</p>
                        <p>	$270</p>
                    </div>
                </div>
                <Button name={"Proceed To Checkout"} isBorder={true} />
            </div>
        </div>
    )
}

export default ShoppingCartSection
