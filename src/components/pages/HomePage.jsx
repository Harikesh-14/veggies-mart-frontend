import React from 'react'
import ImageCarousel from '../containers/ImageCarousel/ImageCarousel'
import Benefits from '../containers/Benefits/Benefits'
import MarketCategory from '../containers/MarketCategory/MarketCategory'

function HomePage() {
  return (
    <>
      <ImageCarousel />
      <Benefits />
      <MarketCategory />
    </>
  )
}

export default HomePage