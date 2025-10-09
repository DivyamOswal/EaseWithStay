import React, { useEffect } from 'react'
import HostelsWelcome from '../components/Hostels/HostelsWelcome'
import BudgetFriendly from '../components/Hostels/BudgetFriendly'
import BackpackersChoice from '../components/Hostels/BackpackersChoice'
import LastMinuteDeals from '../components/Hostels/LastMinuteDeals'
import SoloTravaller from '../components/Hostels/SoloTravaller'

const Hostels = () => {

  useEffect(()=>{
      window.scrollTo({top:0, behavior:"smooth"})
    },[])
  
  return (
    <div>
      <HostelsWelcome/>
      <BudgetFriendly/>
      <BackpackersChoice/>
      <LastMinuteDeals/>
      <SoloTravaller/>
    </div>
  )
}

export default Hostels