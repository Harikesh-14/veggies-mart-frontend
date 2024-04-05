import React from 'react'
import ImageCarousel from '../containers/ImageCarousel/ImageCarousel'
import Benefits from '../containers/Benefits/Benefits'
import MarketCategory from '../containers/MarketCategory/MarketCategory'
import BigCard from '../containers/BigCard/BigCard'
import SpecialOffer from '../containers/SpecialOffer/SpecialOffer'
import FreshFruits from '../containers/FreshFruits/FreshFruits'
import TopSellingProducts from '../containers/TopSellingProducts/TopSellingProducts'
import TwoCard from '../containers/TwoCard/TwoCard'
import Footer from '../containers/Footer/Footer'
import GetCoupons from '../containers/GetCoupons/GetCoupons'

function HomePage() {
  return (
    <>
      <ImageCarousel />
      <Benefits />
      <MarketCategory />
      <BigCard />
      <FreshFruits />
      <SpecialOffer />
      <TopSellingProducts />
      <TwoCard />
      <GetCoupons />
      <Footer />
    </>
  )
}

export default HomePage