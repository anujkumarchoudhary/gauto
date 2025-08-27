import CommonBanner from '@/components/CommonBanner'
import GallerySection from '@/components/GallerySection'
import React from 'react'

const Gallery = () => {
    return (
        <div>
            <CommonBanner title={"Gallery"} name={"gallery"} />
            <GallerySection />
        </div>
    )
}

export default Gallery
