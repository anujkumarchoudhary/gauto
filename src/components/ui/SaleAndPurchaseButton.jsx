import React from 'react'
import Button from './Button'

const SaleAndPurchaseButton = () => {
  return (
    <div className='flex gap- bg-yellow-200'>
      <Button name={"Sale"} className={"w-full bg-[#020202] text-white"} />
      <Button name={"Purchase"} className={"w-full bg-[#EC3323] text-white"} />
    </div>
  )
}

export default SaleAndPurchaseButton
