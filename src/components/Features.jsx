import { Shield, Star, MapPin, Clock } from 'lucide-react'

export default function Features(){
  const items = [
    {icon: MapPin, title: 'Πανελλαδική Κάλυψη', desc: 'Κτηνίατροι σε κάθε πόλη και νησί της Ελλάδας'},
    {icon: Star, title: 'Αξιολογήσεις', desc: 'Πραγματικές κριτικές και βαθμολογίες από πελάτες'},
    {icon: Clock, title: 'Ωράρια & Επείγοντα', desc: 'Πληροφορίες λειτουργίας και 24/7 επείγουσες υπηρεσίες'},
    {icon: Shield, title: 'Επαληθευμένες Καταχωρήσεις', desc: 'Σήμανση κατόπιν ελέγχου για μεγαλύτερη αξιοπιστία'},
  ]
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((it, idx)=>{
            const Icon = it.icon
            return (
              <div key={idx} className="rounded-2xl p-6 bg-white/5 border border-white/10 text-blue-100">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-300 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5"/>
                </div>
                <h3 className="text-white font-semibold mb-1">{it.title}</h3>
                <p className="text-blue-200/80 text-sm">{it.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
