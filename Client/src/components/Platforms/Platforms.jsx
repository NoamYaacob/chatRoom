import { FaSpotify, FaApple, FaYoutube, FaPodcast } from 'react-icons/fa'
import { SiYoutubemusic } from 'react-icons/si'
import './Platforms.css'

const platforms = [
  {
    name: 'Spotify',
    icon: FaSpotify,
    color: '#1DB954',
    url: 'https://open.spotify.com/show/3GhVPIIMeFQojjz2bfR6JZ',
  },
  {
    name: 'Apple Podcasts',
    icon: FaApple,
    color: '#9933CC',
    url: 'https://podcasts.apple.com/il/podcast/%D7%A0%D7%95-%D7%9E%D7%94-%D7%A2%D7%9B%D7%A9%D7%99%D7%95/id1727395880',
  },
  {
    name: 'YouTube',
    icon: FaYoutube,
    color: '#FF0000',
    url: 'https://www.youtube.com/@nu_ma_achshav',
  },
  {
    name: 'YouTube Music',
    icon: SiYoutubemusic,
    color: '#FF0000',
    url: 'https://music.youtube.com/playlist?list=PLQ-2nZXkB8Dbusd_E2K6qS4p8_crSvw-L',
  },
  {
    name: 'Podbean',
    icon: FaPodcast,
    color: '#6EBE45',
    url: 'https://www.podbean.com/podcast-detail/nu-ma-achshav',
  },
]

function Platforms() {
  return (
    <section id="platforms" className="section section-light">
      <div className="container">
        <h2 className="section-title">?איפה להאזין</h2>
        <p className="section-subtitle">הפודקאסט זמין בכל הפלטפורמות המובילות</p>
        <div className="section-title-underline" />

        <div className="platforms__grid">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="platforms__btn"
              style={{ '--platform-color': platform.color }}
            >
              <platform.icon size={28} />
              <span>{platform.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Platforms
