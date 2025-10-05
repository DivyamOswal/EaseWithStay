import React, { useEffect } from 'react'
import Welcome from '../components/Hotel/Welcome'
import TopDeals from '../components/Hotel/TopDeals'
import WeekendGathaways from '../components/Hotel/WeekendGathaways'
import BeachResort from '../components/Hotel/BeachResort'
import FamilyStays from '../components/Hotel/FamilyStays'

const Hotels = () => {

  
  useEffect(()=>{
      window.scrollTo({top:0, behavior:"smooth"})
    },[])
  
  return (
    <div>
      <Welcome/>
      <TopDeals/>
      <WeekendGathaways/>
      <BeachResort/>
      <FamilyStays/>
    </div>
  )
}

export default Hotels