import React from 'react'
import { ReactComponent as Instagram } from "./logo-instagram.svg" 

const InstagramLogo = ({ className, ...props }) => {
  return (
    <Instagram {...props} className={className} />
  )
}


export default InstagramLogo;