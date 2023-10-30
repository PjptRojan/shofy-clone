import React from 'react'
import HeaderComponent from '../../website/HeaderComponent'
import FooterComponent from '../../website/FooterComponent'
import RoundedCard from '../../website/RoundedCard'
import FeaturesComponent from '../../website/FeaturesComponent'
import ItemCardComponent from '../../website/ItemCardComponent'
import TitleComponent from '../../website/TitleComponent'

function MainLayout() {
  return (
    <>
      <HeaderComponent/>
      <div className='container mx-auto w-[1280px]'>
      <RoundedCard/>
      <FeaturesComponent/>
      <TitleComponent/>
      <ItemCardComponent/>  
      </div>
      <FooterComponent/>
      
    </>
  )
}

export default MainLayout
