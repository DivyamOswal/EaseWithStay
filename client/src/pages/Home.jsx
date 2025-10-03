import React from 'react'
import Hero from '../components/Home/Hero'
import Offers from '../components/Home/Offers'
import ExploreIndia from '../components/Home/ExploreIndia'
import Browse from '../components/Home/Browse'
import TravelHelper from '../components/Home/TravelHelper'
import WeekendOffers from '../components/Home/WeekendOffers'
import SummerGathway from '../components/Home/SummerGathway'
import SaveMoney from '../components/Home/SaveMoney'
import BottomAnimation from '../components/Home/BottomAnimation'
import TopChoices from '../components/Home/TopChoices'


const Home = () => {
  return (
    <>
    <Hero/>
    <Offers/>
    <ExploreIndia/>
    <Browse/>
    <TravelHelper/>
    <WeekendOffers/>
    <SummerGathway/>
    <SaveMoney/>
    <BottomAnimation/>
    <TopChoices/>
    </>
  )
}

export default Home