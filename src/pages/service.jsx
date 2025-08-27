import CommonBanner from '@/components/CommonBanner'
import LatestServices from '@/components/LatestServices'
import Card from '@/components/ui/Card'
import { ServiceData } from '@/mockdata/ServiceData'
import React from 'react'

const Service = () => {
    return (
        <div >
            <CommonBanner title={"Service"} name={"service"} />
            <LatestServices/>
        </div>
    )
}

export default Service
