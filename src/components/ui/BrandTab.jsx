import React from 'react'

const BrandTab = ({data}) => {
    return (
        <div className='bg-[#F4F4F5] p-4 space-y-2'>
            {data?.map((item) => {
                return (
                    <p className='font-bold text-sm cursor-pointer bg-white px-4 py-2 hover:text-[#EC3323] '>
                        {item?.label}
                        ({item?.count})
                    </p>
                )
            })}
        </div>
    )
}

export default BrandTab
