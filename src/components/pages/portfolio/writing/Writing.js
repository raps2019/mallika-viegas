import React from 'react'
import { writingData } from './writingData'
import PortfolioItem from '../PortfolioItem'

const Writing = () => {
  return (
    <div>
      <PortfolioItem item={writingData[0]}></PortfolioItem>
    </div>
  )
}

export default Writing
