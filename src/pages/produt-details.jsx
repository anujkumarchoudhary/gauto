import CommonBanner from '@/components/CommonBanner'
import ProductDetailsSection from '@/components/ProductDetailsSection'
import RelatedProducts from '@/components/RelatedProducts'
import React from 'react'

const ProductDetails = () => {
  return (
    <div>
      <CommonBanner title={"Product Details"} name={"product details"}/>
      <ProductDetailsSection/>
      <RelatedProducts/>
    </div>
  )
}

export default ProductDetails
