import Home from './pages/Home'
import Search from './pages/Search'
import Add from './pages/Add'
import About from './pages/About'
import VetDetails from './pages/VetDetails'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/add" element={<Add />} />
      <Route path="/about" element={<About />} />
      <Route path="/v/:id" element={<VetDetails />} />
    </Routes>
  )
}

export default App
