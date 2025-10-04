import React, { useEffect } from 'react'
import Welcome from '../components/Hotel/Welcome'
import TopDeals from '../components/Hotel/TopDeals'
import WeekendGathaways from '../components/Hotel/WeekendGathaways'

const Hotels = () => {

  
  useEffect(()=>{
      window.scrollTo({top:0, behavior:"smooth"})
    },[])
  
  return (
    <div>
      <Welcome/>
      <TopDeals/>
      <WeekendGathaways/>
    </div>
  )
}

export default Hotels