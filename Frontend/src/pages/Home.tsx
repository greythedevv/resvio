import NavBar from '../components/NavBar'
import HeroSession from '../components/landingPage/HeroSession'
import HowItWorks from '../components/landingPage/HowItWorks'
import Features from '../components/landingPage/Features'
import Reviews from '../components/landingPage/Reviews'
import Faq from '../components/landingPage/Faq'
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




