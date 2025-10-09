import React, { useEffect } from 'react'
import BunglowsWelcome from '../components/Bungalows/BunglowsWelcome'
import FamilyFriendly from '../components/Bungalows/FamilyFriendly'
import LakeSideView from '../components/Bungalows/LakeSideView'
import GroupStays from '../components/Bungalows/GroupStays'
import BeachSideGathaway from '../components/Bungalows/BeachSideGathaway'

const Bungalows = () => {
  
  useEffect(()=>{
      window.scrollTo({top:0, behavior:"smooth"})
    },[])
  return (
    <div>
      <BunglowsWelcome/>
      <FamilyFriendly/>
      <LakeSideView/>
      <GroupStays/>
      <BeachSideGathaway/>
    </div>
  )
}

export default Bungalows