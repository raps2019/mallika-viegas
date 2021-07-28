import React, { useContext } from 'react'
import { GlobalPageContainer, GlobalContentContainer } from '../../../globalStyles/GlobalStyles'
import { pageContainerVariants } from '../../variants'
import { SideNavbarContext } from '../../../contexts/SideNavbarProvider'

const Home = () => {

  const { sideNavbarOpen, sideNavbar } = useContext(SideNavbarContext)

  return (
    <GlobalPageContainer
      sideNavbarOpen={sideNavbarOpen}
      sideNavbar={sideNavbar}
      variants= {pageContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <GlobalContentContainer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatem suscipit totam excepturi sunt, adipisci nihil aperiam similique quia vel. At dignissimos praesentium consequatur perferendis inventore tenetur quae, ex provident.
      </GlobalContentContainer>
    </GlobalPageContainer>
  )
}

export default Home
