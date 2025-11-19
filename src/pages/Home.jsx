import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <NavBar />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}
