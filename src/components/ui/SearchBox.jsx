import React from 'react'
import Icons from './Icons'

const SearchBox = ({isLightMode}) => {
  return (
    <div className={` relative ${isLightMode ? "bg-[#F4F4F5]":"bg-[#1A1A1A]"} px-4 py-2 rounded-full flex w-fit`}>
      <input placeholder='Search' className='outline-none'/>
      <Icons size={25} name={"search"} className='absolute top-0% right-3 my-auto pl-2'/>
    </div>
  )
}

export default SearchBox
