import { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { fetchVets } from '../lib/api'
import NavBar from '../components/NavBar'

export default function Search(){
  const [params] = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const [error, setError] = useState('')

  useEffect(()=>{
    const q = params.get('q') || ''
    const city = params.get('city') || ''
    const region = params.get('region') || ''
    setLoading(true)
    fetchVets({q, city, region}).then(setItems).catch(e=>setError(e.message)).finally(()=>setLoading(false))
  }, [params])

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <NavBar />
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-12">
        <h1 className="text-2xl font-bold mb-6">Αποτελέσματα</h1>
        {loading && <p className="text-blue-200">Φόρτωση...</p>}
        {error && <p className="text-red-400">{error}</p>}
        <div className="grid md:grid-cols-2 gap-6">
          {items.map(v => (
            <Link key={v.id} to={`/v/${v.id}`} className="block bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition">
              <div className="flex items-start gap-4">
                <img src={v.avatar_url || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(v.name)}`} alt="avatar" className="w-14 h-14 rounded-lg object-cover" />
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{v.name}</h3>
                  <p className="text-blue-200/80 text-sm">{v.city} • {v.region}</p>
                  <p className="text-yellow-300 text-sm mt-1">★ {v.rating.toFixed(1)} ({v.reviews_count})</p>
                  {v.services?.length > 0 && (
                    <p className="text-blue-200/80 text-xs mt-2 line-clamp-1">{v.services.slice(0,4).join(' • ')}</p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
