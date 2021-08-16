import React from 'react'
import { ReactComponent as ArrowUp } from "./arrow-up.svg" 

const ArrowUpIcon = ({ className, ...props }) => {
  return (
    <ArrowUp {...props} className={className} />
  )
}


export default ArrowUpIcon;