import { FaMicrophoneAlt, FaStar } from 'react-icons/fa'
import './About.css'

const hosts = [
  {
    name: 'צח רוקח',
    initials: 'צ״ר',
    bio: 'קומיקאי סטנדאפ ותסריטאי מבת ים. הופיע בקאמל קומדי קלאב ובמפעל הסטנדאפ, הוציא שני ספיישלים מצולמים, חימם אמנים מובילים כמו אייל קיציס ואדיר מילר, וכתב עבור משתתפי "סטנדאפ ניישן" ו"מועדון לילה". אבא גאה לילדה אחת.',
  },
  {
    name: 'נועם אונגר',
    initials: 'נ״א',
    bio: 'קומיקאי סטנדאפ ויוצר תוכן מנס ציונה. למעלה מעשור של ניסיון על במות הסטנדאפ בישראל. ידוע בדמות הטבח הצבאי הוויראלית שכבשה את הרשתות. חימם קומיקאים מובילים כמו מני עוזרי, אסף יצחקי וישראל קטורזה.',
  },
]

function About() {
  return (
    <section id="about" className="section section-light">
      <div className="container">
        <h2 className="section-title">אודות הפודקאסט</h2>
        <div className="section-title-underline" />

        <div className="about__description">
          <FaMicrophoneAlt className="about__icon" size={40} />
          <p>
            <strong>״נו מה עכשיו?״</strong> הוא פודקאסט קומדי שבועי בהנחיית צח רוקח ונועם אונגר.
            בכל שבוע השניים מדברים, צוחקים, ומנסים להבין מה בעצם קורה פה.
            עם למעלה מ-75 פרקים ודירוג {' '}
            <FaStar className="about__star" /> 4.6 ב-Apple Podcasts,
            הם הוכיחו שאפשר להיות חצי מצליחים ועדיין ממש טובים בזה.
          </p>
          <p className="about__produced">מופק על ידי TOX10 (זה הדיבור)</p>
        </div>

        <h3 className="about__hosts-title">המנחים</h3>
        <div className="about__hosts">
          {hosts.map((host) => (
            <div key={host.name} className="about__host-card">
              <div className="about__host-avatar">
                {host.initials}
              </div>
              <h4 className="about__host-name">{host.name}</h4>
              <p className="about__host-bio">{host.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
