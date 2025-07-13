import Header from '@/components/layout/Header'
import React from 'react'
import TopHeader from './components/layout/TopHeader'
import Footer from '@/components/layout/Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <section>
                <TopHeader />
                <Header />
            </section>
            <section>
                {children}
            </section>
            <section>
                <Footer />
            </section>
        </div>
    )
}

export default Layout
