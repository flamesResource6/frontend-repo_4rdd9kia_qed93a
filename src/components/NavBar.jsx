import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NavBar(){
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between rounded-2xl bg-slate-900/70 backdrop-blur border border-white/10 mt-3">
        <Link to="/" className="text-white font-extrabold text-xl tracking-tight">VetFinder GR</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-blue-100">
          <Link to="/search" className="hover:text-white">Αναζήτηση</Link>
          <Link to="/add" className="hover:text-white">Προσθήκη</Link>
          <Link to="/about" className="hover:text-white">Σχετικά</Link>
        </nav>
        <button className="md:hidden text-white p-2 rounded-lg hover:bg-white/10" aria-label="menu"><Menu className="w-6 h-6"/></button>
      </div>
    </header>
  )
}
