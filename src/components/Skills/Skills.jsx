import React from "react"
import styles from "./Skills.module.css"
import tailwindImage from '../../../assets/skills/tailwind.png'
import cypressImage from '../../../assets/skills/cypress.png'
import reactImage from '../../../assets/skills/1react.png'
import nodeImage from '../../../assets/skills/nodejs.png'
import expressImage from '../../../assets/skills/express.png'
import mongoImage from '../../../assets/skills/mongodb.png'
import jsImage from '../../../assets/skills/javascript.png'
import reduxImage from '../../../assets/skills/redux.png'
import sqlImage from '../../../assets/skills/sql.png'
import nextjsImage from '../../../assets/skills/nextjs.png'

const skills = [
  {
    "title": "React",
    "imageSrc": reactImage
  },
  {
    "title": "Next.js",
    "imageSrc": nextjsImage
  },
  {
    "title": "JavaScript",
    "imageSrc": jsImage
  },
  {
    "title": "Node.js",
    "imageSrc": nodeImage
  },
  {
    "title": "MongoDB",
    "imageSrc": mongoImage
  },
  {
    "title": "Express",
    "imageSrc": expressImage
  },
  {
    "title": "Redux",
    "imageSrc": reduxImage
  },
  {
    "title": "Tailwind",
    "imageSrc": tailwindImage
  },
  {
    "title": "SQL",
    "imageSrc": sqlImage
  },
  {
    "title": "Cypress",
    "imageSrc": cypressImage
  },
];

const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>My Toolkit</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills