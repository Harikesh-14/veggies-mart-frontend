import React from 'react'
import ImageCarousel from '../containers/ImageCarousel/ImageCarousel'
import Benefits from '../containers/Benefits/Benefits'
import MarketCategory from '../containers/MarketCategory/MarketCategory'
import BigCard from '../containers/BigCard/BigCard'

function HomePage() {
  return (
    <>
      <ImageCarousel />
      <Benefits />
      <MarketCategory />
      <BigCard />
    </>
  )
}

export default HomePage