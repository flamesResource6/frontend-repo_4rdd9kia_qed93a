import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'
import BackgroundFX from '../components/BackgroundFX'

export default function Home(){
  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
      <BackgroundFX />
      <NavBar />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}
