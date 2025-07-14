import React from 'react'
import Heading from './ui/Heading'
import ProductCard from './ui/ProductCard'

const cardData = [
    {
        image: "",
        name: "Car Battery",
        price: "$180.00",
        icon: "cart"
    },
    {
        image: "",
        name: "Car Battery",
        price: "$180.00",
        icon: "cart"
    },
    {
        image: "",
        name: "Car Battery",
        price: "$180.00",
        icon: "cart"
    },
    {
        image: "",
        name: "Car Battery",
        price: "$180.00",
        icon: "cart"
    },
]
const RelatedProducts = () => {
    return (
        <div className='px-[5%] py-[4rem]'>
            <Heading label={"Products"} name={"Related Products"} />
            <div className='grid grid-cols-4 gap-5'>
                {cardData?.map((item) => {
                    return (
                        <div>
                            <ProductCard name={item?.name} price={item?.price} icon={item?.icon} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RelatedProducts
