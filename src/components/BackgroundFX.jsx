import { useEffect, useState } from 'react'

// Ambient background effects: soft gradient blobs, subtle grid and grain
export default function BackgroundFX({ className = '' }) {
  const [pos, setPos] = useState({ x: 50, y: 30 })

  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setPos({ x, y })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {/* soft vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950"/>

      {/* interactive spotlight */}
      <div
        className="absolute -inset-40 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            `radial-gradient(600px 400px at ${pos.x}% ${pos.y}%, rgba(56,189,248,0.25), rgba(99,102,241,0.18) 35%, rgba(15,23,42,0) 60%)`
        }}
      />

      {/* gradient blobs */}
      <div className="absolute -top-24 -left-16 w-[50rem] h-[50rem] bg-gradient-to-br from-sky-500/20 via-indigo-500/15 to-fuchsia-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-20 w-[42rem] h-[42rem] bg-gradient-to-tr from-emerald-400/20 via-cyan-400/15 to-blue-500/10 rounded-full blur-3xl" />

      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
          backgroundSize: '22px 22px'
        }}
      />

      {/* grain */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            'url(https://www.transparenttextures.com/patterns/asfalt-dark.png)'
        }}
      />
    </div>
  )
}
