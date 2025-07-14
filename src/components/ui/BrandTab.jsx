import React from 'react'

const BrandTab = ({ isHeading, data }) => {
    return (
        <div className='p-4 space-y-2'>
            {isHeading && <p className='text-lg font-bold'>By Category</p> }
            <div className='!bg-[#F4F4F5] p-4 space-y-1.5'>
                {data?.map((item) => {
                return (
                    <p className='font-bold text-sm cursor-pointer bg-white px-4 py-2 hover:text-[#EC3323] '>
                        {item?.label}
                        ({item?.count})
                    </p>
                )
            })}
            </div>
        </div>
    )
}

export default BrandTab
