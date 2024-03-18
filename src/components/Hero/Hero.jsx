import styles from "./Hero.module.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Hero = () => {
  const getImageUrl = (imageName) => {
    return `/assets/${imageName}`
  };
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Leila Abdulahad</h1>
        <p className={styles.description}>
          
        I am a passionate frontend developer student deeply interested in all things tech. Currently, I'm also actively engaged in the CS50 Databases and SQL course, having recently completed CS50's Introduction to Computer Science.
        </p>
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
      {/* <div className="">
     <img
        src={getImageUrl("hero/hero-img2.png")}
        alt="Hero image of me"
        className={styles.heroImg}
        /> 
      </div> */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;