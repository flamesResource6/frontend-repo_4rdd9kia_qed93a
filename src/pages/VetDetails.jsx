import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchVet, fetchReviews } from '../lib/api'
import NavBar from '../components/NavBar'

export default function VetDetails(){
  const { id } = useParams()
  const [vet, setVet] = useState(null)
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(()=>{
    async function load(){
      try{
        const v = await fetchVet(id)
        setVet(v)
        const r = await fetchReviews(id)
        setReviews(r)
      }catch(e){
        setError(e.message)
      }finally{
        setLoading(false)
      }
    }
    load()
  }, [id])

  if (loading) return <div className="min-h-screen bg-slate-900 text-blue-100 flex items-center justify-center">Φόρτωση...</div>
  if (error) return <div className="min-h-screen bg-slate-900 text-red-400 flex items-center justify-center">{error}</div>
  if (!vet) return null

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <NavBar />
      <div className="max-w-5xl mx-auto px-6 pt-28 pb-16">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-start gap-6">
            <img src={vet.avatar_url || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(vet.name)}`} alt="avatar" className="w-24 h-24 rounded-xl object-cover" />
            <div className="flex-1">
              <h1 className="text-2xl font-bold">{vet.name}</h1>
              <p className="text-blue-200/80">{vet.city} • {vet.region}</p>
              <p className="text-yellow-300 mt-1">★ {vet.rating.toFixed(1)} ({vet.reviews_count})</p>
              {vet.address && <p className="text-blue-200/80 mt-2">{vet.address}</p>}
              <div className="flex gap-3 mt-3 text-sm">
                {vet.phone && <a href={`tel:${vet.phone}`} className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">Τηλέφωνο</a>}
                {vet.website && <a href={vet.website} target="_blank" className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded">Ιστότοπος</a>}
                {vet.email && <a href={`mailto:${vet.email}`} className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded">Email</a>}
              </div>
              {vet.services?.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-semibold mb-1">Υπηρεσίες</h3>
                  <div className="flex flex-wrap gap-2 text-sm text-blue-100">
                    {vet.services.map((s,i)=> <span key={i} className="bg-white/10 px-2 py-1 rounded">{s}</span>)}
                  </div>
                </div>
              )}
              {vet.specialties?.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-semibold mb-1">Ειδικότητες</h3>
                  <div className="flex flex-wrap gap-2 text-sm text-blue-100">
                    {vet.specialties.map((s,i)=> <span key={i} className="bg-white/10 px-2 py-1 rounded">{s}</span>)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-3">Αξιολογήσεις</h2>
          <div className="space-y-3">
            {reviews.length === 0 && <p className="text-blue-200/80">Δεν υπάρχουν αξιολογήσεις ακόμη.</p>}
            {reviews.map(r => (
              <div key={r.id} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="font-semibold">{r.author_name} <span className="text-yellow-300">★ {r.rating}</span></p>
                {r.comment && <p className="text-blue-200/80 mt-1">{r.comment}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
