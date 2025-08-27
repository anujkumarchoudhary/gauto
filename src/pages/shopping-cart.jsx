import CommonBanner from '@/components/CommonBanner'
import ShoppingCartSection from '@/components/ShoppingCartSection'
import React from 'react'

const ShoppingCart = () => {
    return (
        <div >
            <CommonBanner title={"Shopping Cart"} name={"shopping cart"}  />
            <ShoppingCartSection />
        </div>
    )
}

export default ShoppingCart
