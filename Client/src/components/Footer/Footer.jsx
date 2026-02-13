import { FaInstagram, FaTiktok, FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import './Footer.css'

const socialLinks = [
  { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/nu_ma_achshav/' },
  { name: 'TikTok', icon: FaTiktok, url: 'https://www.tiktok.com/@nu_ma_achshav' },
  { name: 'Facebook', icon: FaFacebookF, url: 'https://www.facebook.com/numalachshav' },
  { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/message/nu_ma_achshav' },
]

const quickLinks = [
  { label: 'אודות', href: '#about' },
  { label: 'פרקים', href: '#episodes' },
  { label: 'איפה להאזין', href: '#platforms' },
  { label: 'הופעות', href: '#shows' },
]

function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__about">
            <h3 className="footer__logo">?נו מה עכשיו</h3>
            <p className="footer__desc">
              הפודקאסט הכי חצי מצליח בישראל.
              כל שבוע פרק חדש עם צח רוקח ונועם אונגר.
            </p>
          </div>

          <div className="footer__social-section">
            <h4 className="footer__heading">עקבו אחרינו</h4>
            <div className="footer__social">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={link.name}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer__nav">
            <h4 className="footer__heading">ניווט מהיר</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => handleClick(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__divider" />
        <p className="footer__copyright">
          © {new Date().getFullYear()} נו מה עכשיו? | מופק על ידי TOX10 (זה הדיבור)
        </p>
      </div>
    </footer>
  )
}

export default Footer
