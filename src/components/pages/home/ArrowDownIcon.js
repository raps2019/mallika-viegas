import React from 'react'
import { ReactComponent as ArrowDown } from "./arrow-down.svg" 

const ArrowDownIcon = ({ className, ...props }) => {
  return (
    <ArrowDown {...props} className={className} />
  )
}


export default ArrowDownIcon;