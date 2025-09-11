import CommonBanner from '@/components/CommonBanner'
import BrandTab from '@/components/ui/BrandTab'
import ProductCard from '@/components/ui/ProductCard'
import SearchBox from '@/components/ui/SearchBox'
import TopSelling from '@/components/ui/TopSelling'
import React from 'react'
const data = [
    {
        label: "All Brands",
        count: 1123,
    },
    {
        label: "Toyota",
        count: 754,
    },
    {
        label: "Nissan",
        count: 4,
    },
    {
        label: "Mercedes",
        count: 374,
    },
    {
        label: "Hyundai",
        count: 375,
    },
    {
        label: "Audi",
        count: 798,
    }
]

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
    }
]
const Product = () => {
    return (
        <div>
            <CommonBanner title={"Shop"} name={"shop"}  />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-[5%] py-[4rem]' >
                <div className='space-y-4' >
                    <SearchBox isLightMode={true} />
                    <BrandTab isHeading={true} data={data} />
                    <TopSelling/>
                </div>
                <div className='col-span-2'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                        {cardData?.map((item) => {
                            return (
                                <div>
                                    <ProductCard name={item?.name} price={item?.price} icon={item?.icon} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product
