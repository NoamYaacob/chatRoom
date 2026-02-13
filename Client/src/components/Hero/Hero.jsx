import { FaPlay } from 'react-icons/fa'
import { IoChevronDown } from 'react-icons/io5'
import './Hero.css'

function Hero() {
  const scrollToPlatforms = (e) => {
    e.preventDefault()
    document.querySelector('#platforms')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = (e) => {
    e.preventDefault()
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero__bg" />
      <div className="hero__content">
        <div className="hero__cover">
          <div className="hero__cover-art">
            <span className="hero__mic">🎙️</span>
            <div className="hero__cover-text">
              <span>נו מה</span>
              <span>?עכשיו</span>
            </div>
          </div>
        </div>
        <h1 className="hero__title">?נו מה עכשיו</h1>
        <p className="hero__tagline">הפודקאסט הכי חצי מצליח בישראל</p>
        <p className="hero__hosts">עם צח רוקח ונועם אונגר</p>
        <div className="hero__badge">
          ⭐ 4.6/5 ב-Apple Podcasts
        </div>
        <button className="hero__cta" onClick={scrollToPlatforms}>
          <FaPlay size={14} />
          האזינו עכשיו
        </button>
      </div>
      <a href="#about" className="hero__scroll-down" onClick={scrollToAbout}>
        <IoChevronDown size={28} />
      </a>
    </section>
  )
}

export default Hero
