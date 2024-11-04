import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, demo, source, youtube },
}) => {
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <div className={`${styles.container} ${isReadMore ? styles.expanded : ''}`}>
      <h3 className={styles.title}>{title}</h3>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <div className={styles.contentWrapper}>
        <p className={`${styles.description} ${!isReadMore ? styles.collapsed : ''}`}>
          {description}
        </p>
        
        <div className={styles.buttonContainer}>
          <button 
            className={styles.readMoreButton} 
            onClick={() => setIsReadMore(!isReadMore)}
          >
            {isReadMore ? "show less" : "read more"}
          </button>
          
          <div className={styles.links}>
            <button className={styles.githubButton}>
              <a href={source} className={styles.link}>
                GitHub
              </a>
            </button>
            {demo && (
              <button className={styles.githubButton}>
                <a href={demo} className={styles.link}>
                  Live demo
                </a>
              </button>
            )}
            {youtube && (
              <button className={styles.githubButton}>
                <a href={youtube} className={styles.link}>
                  YouTube
                </a>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;