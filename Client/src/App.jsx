import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Episodes from './components/Episodes/Episodes'
import Platforms from './components/Platforms/Platforms'
import LiveShows from './components/LiveShows/LiveShows'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Episodes />
      <Platforms />
      <LiveShows />
      <Footer />
    </div>
  )
}

export default App
