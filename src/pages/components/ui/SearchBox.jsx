import React from 'react'
import Icons from './Icons'

const SearchBox = () => {
  return (
    <div className='bg-[#1A1A1A] px-4 py-2 rounded-full flex'>
      <input placeholder='Search' className='outline-none'/>
      <Icons size={25} name={"search"} className='my-auto pl-2'/>
    </div>
  )
}

export default SearchBox
