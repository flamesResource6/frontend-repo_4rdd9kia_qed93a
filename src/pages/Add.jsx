import { useState } from 'react'
import NavBar from '../components/NavBar'
import { createVet } from '../lib/api'

export default function Add(){
  const [form, setForm] = useState({ name:'', city:'', region:'', phone:'', email:'', address:'', website:'', services:'', specialties:'' })
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')

  const update = (e) => setForm({...form, [e.target.name]: e.target.value})

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMsg('')
    try{
      const payload = {
        name: form.name,
        city: form.city,
        region: form.region,
        phone: form.phone || undefined,
        email: form.email || undefined,
        address: form.address || undefined,
        website: form.website || undefined,
        services: form.services ? form.services.split(',').map(s=>s.trim()).filter(Boolean) : [],
        specialties: form.specialties ? form.specialties.split(',').map(s=>s.trim()).filter(Boolean) : [],
      }
      const id = await createVet(payload)
      setMsg('Η καταχώρηση αποθηκεύτηκε!')
      setForm({ name:'', city:'', region:'', phone:'', email:'', address:'', website:'', services:'', specialties:'' })
    }catch(e){
      setMsg('Σφάλμα: ' + e.message)
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <NavBar />
      <div className="max-w-3xl mx-auto px-6 pt-28 pb-16">
        <h1 className="text-2xl font-bold mb-6">Προσθήκη Κτηνιάτρου</h1>
        <form onSubmit={onSubmit} className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={update} placeholder="Επωνυμία/Όνομα" required className="bg-white/10 rounded px-3 py-2 outline-none" />
            <input name="city" value={form.city} onChange={update} placeholder="Πόλη" required className="bg-white/10 rounded px-3 py-2 outline-none" />
            <input name="region" value={form.region} onChange={update} placeholder="Περιφέρεια/Νομός" required className="bg-white/10 rounded px-3 py-2 outline-none" />
            <input name="phone" value={form.phone} onChange={update} placeholder="Τηλέφωνο" className="bg-white/10 rounded px-3 py-2 outline-none" />
            <input name="email" value={form.email} onChange={update} placeholder="Email" className="bg-white/10 rounded px-3 py-2 outline-none" />
            <input name="website" value={form.website} onChange={update} placeholder="Ιστότοπος" className="bg-white/10 rounded px-3 py-2 outline-none" />
            <input name="address" value={form.address} onChange={update} placeholder="Διεύθυνση" className="md:col-span-2 bg-white/10 rounded px-3 py-2 outline-none" />
            <input name="services" value={form.services} onChange={update} placeholder="Υπηρεσίες (χωρισμένες με κόμμα)" className="md:col-span-2 bg-white/10 rounded px-3 py-2 outline-none" />
            <input name="specialties" value={form.specialties} onChange={update} placeholder="Ειδικότητες (χωρισμένες με κόμμα)" className="md:col-span-2 bg-white/10 rounded px-3 py-2 outline-none" />
          </div>
          <button disabled={loading} className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 px-4 py-2 rounded font-semibold">{loading ? 'Αποθήκευση...' : 'Αποθήκευση'}</button>
          {msg && <p className="text-blue-200">{msg}</p>}
        </form>
      </div>
    </div>
  )
}
