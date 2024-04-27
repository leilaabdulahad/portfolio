import styles from './About.module.css'
import Tilty from 'react-tilty'

function About() {
  return (
    <Tilty>
    <div id='about' className={styles.about}>
      <h2 className={styles.heading}>About Me</h2>
      <p className={styles.description}>
        One of the most thrilling aspects of software development for me is the power to transform abstract concepts into concrete creations. I'm continuously seeking to enhance my skills and broaden my understanding, I thrive on challenges and pride myself on being a fast learner and a problem solver.
      </p>
      
    </div>
    </Tilty>
  )
}

export default About;
