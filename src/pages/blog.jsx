import CommonBanner from '@/components/CommonBanner'
import BlogCard from '@/components/ui/BlogCard'
import React from 'react'
import img from '../../public/assets/images/blog-1.a096363c44cf6e780297.jpg'
import SearchBox from '@/components/ui/SearchBox'
import BrandTab from '@/components/ui/BrandTab'
const data = [
    {
        image: img,
        heading: "if Your Car's bettery down.",
        description: "Fusce quis nulla volutpat, rhoncus ligula ut, pulvinar nisi. In dapibus urna sit amet accumsan tristique. Donec odio ligula, luctus venenatis varius id, tincidunt ac ipsum. Cras commodo, velit nec aliquam dictum, tortor velit dictum ipsum, sed ornare nunc leo nec ipsum. Vestibulum sagittis"
    },
    {
        image: img,
        heading: "How often is a taxi used?",
        description: "Fusce quis nulla volutpat, rhoncus ligula ut, pulvinar nisi. In dapibus urna sit amet accumsan tristique. Donec odio ligula, luctus venenatis varius id, tincidunt ac ipsum. Cras commodo, velit nec aliquam dictum, tortor velit dictum ipsum, sed ornare nunc leo nec ipsum. Vestibulum sagittis"
    },
    {
        image: img,
        heading: "The best ways to pay Drivers",
        description: "Fusce quis nulla volutpat, rhoncus ligula ut, pulvinar nisi. In dapibus urna sit amet accumsan tristique. Donec odio ligula, luctus venenatis varius id, tincidunt ac ipsum. Cras commodo, velit nec aliquam dictum, tortor velit dictum ipsum, sed ornare nunc leo nec ipsum. Vestibulum sagittis"
    },
    {
        image: img,
        heading: "How often is a taxi used?",
        description: "Fusce quis nulla volutpat, rhoncus ligula ut, pulvinar nisi. In dapibus urna sit amet accumsan tristique. Donec odio ligula, luctus venenatis varius id, tincidunt ac ipsum. Cras commodo, velit nec aliquam dictum, tortor velit dictum ipsum, sed ornare nunc leo nec ipsum. Vestibulum sagittis"
    }
]
const data2 = [
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
const tags = ["Apartment", "Garage", "Condo", "Villa", "Bungalow", "Garage", "Villa", "Electrical", "Financial"]
const Blog = () => {
    return (
        <div>
            <CommonBanner />
            <div className='grid grid-cols-5 gap-5 px-[5%] py-[4rem]'>
                <div className='col-span-3 space-y-6'>
                    {data?.map((item) => {
                        return (
                            <div >
                                <BlogCard img={item?.image} heading={item?.heading} description={item?.description} />
                            </div>
                        )
                    })}
                </div>
                <div className='col-span-2 space-y-6'>
                    <SearchBox isLightMode={true} />
                    <BrandTab isHeading={true} data={data2} />
                    <div className='p-5 space-y-4'>
                        <p className='text-xl font-bold'>By Tags</p>
                       <div className='flex gap-2 flex-wrap bg-[#F4F4F5] p-5'>
                         {tags?.map((item) => {
                            return (
                                <p className='px-4 py-2 bg-[#FFFFFF] w-fit'>{item}</p>
                            )
                        })}
                       </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
