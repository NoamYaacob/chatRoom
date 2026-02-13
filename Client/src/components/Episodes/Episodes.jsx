import { FaHeadphones, FaClock, FaCalendarAlt } from 'react-icons/fa'
import { episodes } from '../../data/episodes'
import './Episodes.css'

function Episodes() {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('he-IL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <section id="episodes" className="section section-dark">
      <div className="container">
        <h2 className="section-title">פרקים אחרונים</h2>
        <p className="section-subtitle">למעלה מ-75 פרקים של צחוקים, שטויות ותובנות מפוקפקות</p>
        <div className="section-title-underline" />

        <div className="episodes__grid">
          {episodes.map((ep) => (
            <div key={ep.id} className="episodes__card">
              <div className="episodes__number">
                {ep.number}
              </div>
              <h3 className="episodes__card-title">{ep.title}</h3>
              <p className="episodes__card-desc">{ep.description}</p>
              <div className="episodes__card-meta">
                <span>
                  <FaCalendarAlt size={12} />
                  {formatDate(ep.date)}
                </span>
                <span>
                  <FaClock size={12} />
                  {ep.duration}
                </span>
              </div>
              <a
                href="https://open.spotify.com/show/3GhVPIIMeFQojjz2bfR6JZ"
                target="_blank"
                rel="noopener noreferrer"
                className="episodes__card-btn"
              >
                <FaHeadphones size={14} />
                האזינו
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Episodes
