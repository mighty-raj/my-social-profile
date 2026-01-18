import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="app-container">
      <div className="layout-grid">
        <Header onMenuClick={() => setNavOpen(!navOpen)} />
        <Navigation isOpen={navOpen} onClose={() => setNavOpen(false)} />
        <main className="main-content">
          <About />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
