import { FaTicketAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { shows } from '../../data/shows'
import './LiveShows.css'

function LiveShows() {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    const day = date.getDate()
    const month = date.toLocaleDateString('he-IL', { month: 'short' })
    const year = date.getFullYear()
    return { day, month, year }
  }

  return (
    <section id="shows" className="section section-dark">
      <div className="container">
        <h2 className="section-title">הופעות קרובות</h2>
        <p className="section-subtitle">בואו לראות אותנו חיים (ולשמוע את אותם בדיחות שוב)</p>
        <div className="section-title-underline" />

        <div className="shows__list">
          {shows.map((show) => {
            const { day, month, year } = formatDate(show.date)
            return (
              <div key={show.id} className="shows__card">
                <div className="shows__date">
                  <span className="shows__day">{day}</span>
                  <span className="shows__month">{month}</span>
                  <span className="shows__year">{year}</span>
                </div>
                <div className="shows__info">
                  <h3 className="shows__title">{show.title}</h3>
                  <p className="shows__venue">
                    <FaMapMarkerAlt size={14} />
                    {show.venue}, {show.city}
                  </p>
                  <p className="shows__time">שעה: {show.time}</p>
                </div>
                <div className="shows__action">
                  {show.soldOut ? (
                    <span className="shows__sold-out">אזלו הכרטיסים</span>
                  ) : (
                    <a
                      href={show.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shows__ticket-btn"
                    >
                      <FaTicketAlt size={14} />
                      לכרטיסים
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default LiveShows
