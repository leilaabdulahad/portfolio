import styles from "./Hero.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import hero from "../../data/hero.json"

const Hero = () => {
  const heroText = hero[0].hero

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Leila Abdulahad</h1>
        <p className={styles.description}>{heroText}</p>
        <div>
        <button 
          className={styles.contactBtn} 
          onClick={(e) => {
            window.location = 'mailto:leilaabdulahad@hotmail.com'
            e.preventDefault();
          }}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </button>
        <button 
          className={styles.contactBtn}
          onClick={(e) => {
            window.open('https://www.linkedin.com/in/leila-abdulahad-a5672b264', '_blank')
            e.preventDefault();
          }}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </button>
        <button 
          className={styles.contactBtn}
          onClick={(e) => {
            window.open('https://github.com/leilaabdulahad', '_blank')
            e.preventDefault()
          }}
        >
          <FontAwesomeIcon icon={faGithub} />
        </button>
        </div>
      </div>
    </section>
  )
}

export default Hero