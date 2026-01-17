import './App.css'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import PayMe from './components/PayMe'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <About />
        <Contact />
        <PayMe />
      </main>
      <Footer />
    </div>
  )
}

export default App
