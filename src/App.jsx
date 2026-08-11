import { Link, Route, Routes } from 'react-router'

function Home() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-950 px-6 text-slate-100">
      <section className="max-w-xl text-center">
        <p className="mb-3 text-sm font-medium tracking-[0.3em] text-cyan-300">RASKMF</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">React, Vite, Tailwind, and Router are ready.</h1>
        <p className="mt-6 text-lg text-slate-300">Start building from <code className="rounded bg-slate-800 px-2 py-1 text-sm">src/App.jsx</code>.</p>
        <Link className="mt-8 inline-block rounded-lg bg-cyan-300 px-4 py-2 font-semibold text-slate-950 hover:bg-cyan-200" to="/about">See routing</Link>
      </section>
    </main>
  )
}

function About() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-950 px-6 text-center text-slate-100">
      <section>
        <h1 className="text-4xl font-bold">About route</h1>
        <Link className="mt-6 inline-block text-cyan-300 hover:text-cyan-200" to="/">Back home</Link>
      </section>
    </main>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}
