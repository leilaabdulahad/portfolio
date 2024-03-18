import React from "react";
import styles from "./About.module.css";
import Tilty from 'react-tilty';

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About me</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <Tilty>
            <li className={styles.aboutItem}>
              <div className={styles.aboutItemText}>
                <h3>Education</h3>
                <div className={styles.detail}>
                  <p>CS50: Databases and SQL</p>
                  <span>Delving deeper into the realm of databases and SQL, this course is equipping me with the essential skills needed to design, manage, and query databases effectively. From database modeling to complex SQL queries, I'm gaining valuable insights into handling and analyzing data efficiently.</span>
                  <span>2024-</span>
                </div>
                <div className={styles.detail}>
                  <p>CS50: Introduction to Computer Science</p>
                  <span>This course has equipped me with foundational knowledge in computer science principles, data structures, algorithms and programming languages such as C, Javascript, Python, and SQL.</span>
                  <span>2023-2024</span>
                  <a href="https://certificates.cs50.io/7d799f15-2d67-4b12-9802-2bd4d6211676.pdf?size=letter" target="_blank" rel="noopener noreferrer">View Certificate</a>
                </div>
                <div className={styles.detail}>
                  <p>Frontend Developer at KYH, Stockholm</p>
                  <span>I'm gaining practical experience in frontend development with a focus on HTML, CSS, JS, and React including TS and backend development.</span>
                  <span>2023-</span>
                </div>

              </div>
            </li>
          </Tilty>
          
          {/* Work Experience Card */}
          <Tilty>
            <li className={styles.aboutItem}>
              <div className={styles.aboutItemText}>
                <h3>Work Experience</h3>
                <div className={styles.detail}>
                  <p>Swedish as second language teacher</p>
                  <span>As a Swedish as Second Language teacher, I had the opportunity to foster an inclusive learning environment for students from diverse linguistic backgrounds. I facilitated language acquisition through engaging lessons and tailored approaches. </span>
                  <span>2023</span>
                </div>
              </div>
            </li>
          </Tilty>
        </ul>
      </div>
    </section>
  );
};

export default About;
