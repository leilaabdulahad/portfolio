import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, demo, source, youtube },
}) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const shortDescription = description.split(" ").slice(0, 28).join(" ");

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
        />
      <p className={styles.description}>
        {isReadMore ? description : `${shortDescription}...`}
        <button className={styles.readMoreButton} onClick={() => setIsReadMore(!isReadMore)}>
          {isReadMore ? "show less" : "read more"}
        </button>
      </p>
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
  );
};

export default ProjectCard;