import React from 'react'
import ImageCarousel from '../containers/ImageCarousel/ImageCarousel'
import Benefits from '../containers/Benefits/Benefits'
import MarketCategory from '../containers/MarketCategory/MarketCategory'
import BigCard from '../containers/BigCard/BigCard'
import SpecialOffer from '../containers/SpecialOffer/SpecialOffer'
import FreshFruits from '../containers/FreshFruits/FreshFruits'

function HomePage() {
  return (
    <>
      <ImageCarousel />
      <Benefits />
      <MarketCategory />
      <BigCard />
      <SpecialOffer />
      <FreshFruits />
    </>
  )
}

export default HomePage