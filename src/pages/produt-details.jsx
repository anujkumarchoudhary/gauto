import CommonBanner from '@/components/CommonBanner'
import ProductDetailsSection from '@/components/ProductDetailsSection'
import RelatedProducts from '@/components/RelatedProducts'
import React from 'react'

const ProductDetails = () => {
  return (
    <div>
      <CommonBanner/>
      <ProductDetailsSection/>
      <RelatedProducts/>
    </div>
  )
}

export default ProductDetails
