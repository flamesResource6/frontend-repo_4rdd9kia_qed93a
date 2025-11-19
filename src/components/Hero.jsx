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
    <section className="relative pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-blue-200/80 text-xs tracking-wide">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse"/> Live • Καταχωρήσεις κτηνιάτρων σε όλη την Ελλάδα
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Βρες τον κατάλληλο κτηνίατρο, άμεσα
          </h1>
          <p className="mt-4 text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            Premium κατάλογος με αξιόπιστες αξιολογήσεις, υπηρεσίες, ωράρια και γεωγραφική κάλυψη.
          </p>
          <form onSubmit={onSubmit} className="mt-8 max-w-3xl mx-auto flex items-center bg-white/10 border border-white/15 rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset] overflow-hidden backdrop-blur supports-[backdrop-filter]:bg-white/10">
            <div className="pl-4 text-blue-100/80"><Search className="w-5 h-5" /></div>
            <input value={q} onChange={(e)=>setQ(e.target.value)} className="flex-1 px-3 py-3 outline-none bg-transparent text-blue-50 placeholder-blue-200/60" placeholder="Αναζήτησε πόλη, ειδικότητα ή όνομα..." />
            <button className="m-1 bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-5 py-2.5 rounded-xl font-semibold hover:from-sky-400 hover:to-indigo-400 transition active:scale-[0.99]">
              Αναζήτηση
            </button>
          </form>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-blue-200/70">
            <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10">24/7 Επείγοντα</span>
            <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10">Ορθοπεδική</span>
            <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10">Εξωτικά Ζώα</span>
            <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10">Μικροτσίπ</span>
          </div>
        </div>
      </div>
      {/* bottom glow */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 h-40 w-[80%] bg-gradient-to-t from-sky-500/20 via-indigo-500/10 to-transparent blur-2xl" />
    </section>
  )
}
