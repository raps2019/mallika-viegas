import React from 'react'
import { ReactComponent as Linkedin } from "./logo-linkedin.svg" 

const LinkedinLogo = ({ className, ...props }) => {
  return (
    <Linkedin {...props} className={className} />
  )
}


export default LinkedinLogo;