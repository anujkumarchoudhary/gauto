import React from 'react'
import { HeaderData } from '@/pages/components/mockdata/HeaderData'
import Icons from '../ui/Icons'
import SearchBox from '../ui/SearchBox'
const Header = () => {
  console.log(HeaderData?.menuList, "HeaderData>>>")
  return (
    <div className='flex justify-between bg-[#020202] px-[5%] py-3 text-white'>
      <div className='flex gap-6 my-auto'>
        {HeaderData?.menuList?.map((item) => {
          return (
            <p className='cursor-pointer'>{item.label}</p>
          )
        })}
      </div>
      <div className='flex gap-5'>
        <div className='relative my-auto'>
          <Icons size={25} name={"cart"} className='' />
          <p className='absolute bottom-5 left-5 bg-[#EC3323] m-auto h-5 w-5 rounded-full flex items-center text-xs justify-center'>3</p>
        </div>
        <SearchBox />
      </div>
    </div>
  )
}

export default Header
