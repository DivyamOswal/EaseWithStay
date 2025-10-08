import React, { useEffect } from 'react'
import LuxuryVillas from '../components/Villa/LuxuryVillas'
import Welcome from '../components/Hotel/HotelWelcome'
import VillaWelcome from '../components/Villa/VillaWelcome'
import CityEscapes from '../components/Villa/CityEscapes'
import HeritageStays from '../components/Villa/HeritageStays'
import NatureRetreat from '../components/Villa/NatureRetreat'

const Villas = () => {
   useEffect(()=>{
        window.scrollTo({top:0, behavior:"smooth"})
      },[])
    
  return (
    <div>
      <VillaWelcome/>
      <LuxuryVillas/>
      <CityEscapes/>
      <HeritageStays/>
      <NatureRetreat/>
    </div>
  )
}

export default Villas