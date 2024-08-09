import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import './Experience.module.css';
import experiences from '../../data/experience.json';

export const textVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.9,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
};

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#343a40a8", color: "#fff" }}
    contentArrowStyle={{ borderRight: "5px solid  #343a40a8" }}
    date={experience.date}
    iconStyle={{ background: '#31363F' }}
  >
    <div>
      <h3 className="experience-title" style={{ marginBottom: '0' }}>{experience.title}</h3>
      <p className="experience-company" style={{ marginTop: '0' }}>{experience.company}</p>
    </div>
    <ul style={{ listStyleType: 'none' }}>
      {experience.points.map((point, index) => (
        <li className="list" key={`experience-point-${index}`} style={{ marginTop: '5px' }}>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => (
  <div id="experience">
    <motion.div variants={textVariant} initial="hidden" animate="visible" exit="exit">
      <h2>Experience</h2>
    </motion.div>
    <div>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`experience-${index}`}
            experience={experience}
          />
        ))}
      </VerticalTimeline>
    </div>
  </div>
);

export default Experience;