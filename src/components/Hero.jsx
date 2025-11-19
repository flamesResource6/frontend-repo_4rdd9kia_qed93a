import { Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Hero() {
  const [q, setQ] = useState('')
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (q) params.set('q', q)
    navigate(`/search?${params.toString()}`)
  }

  return (
    <section className="relative pt-24 pb-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-sky-500/20" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">
            Premium Business Directory για Κτηνιάτρους
          </h1>
          <p className="mt-4 text-blue-100 text-lg md:text-xl">
            Βρες αξιόπιστους κτηνιάτρους σε όλη την Ελλάδα. Αξιολογήσεις, υπηρεσίες, ωράρια και περισσότερα.
          </p>
          <form onSubmit={onSubmit} className="mt-8 max-w-2xl mx-auto flex items-center bg-white/90 border border-white/30 rounded-xl shadow-lg overflow-hidden backdrop-blur">
            <div className="pl-3 text-gray-400"><Search className="w-5 h-5" /></div>
            <input value={q} onChange={(e)=>setQ(e.target.value)} className="flex-1 px-3 py-3 outline-none bg-transparent text-gray-800 placeholder-gray-500" placeholder="Αναζήτησε πόλη, ειδικότητα ή όνομα..." />
            <button className="bg-blue-600 text-white px-5 py-3 font-semibold hover:bg-blue-700 transition">Αναζήτηση</button>
          </form>
        </div>
      </div>
    </section>
  )
}
