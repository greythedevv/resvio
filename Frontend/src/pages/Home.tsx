import React from 'react'
import NavBar from '../components/navBar'
import HeroSession from '../components/landingPage/heroSession'
import HowItWorks from '../components/landingPage/howItWorks'
import Features from '../components/landingPage/features'
import Reviews from '../components/landingPage/reviews'
import Faq from '../components/landingPage/faq'
import Footer from '../components/landingPage/Footer'

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroSession />
      <HowItWorks />
      <Features />
      <Reviews />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home




