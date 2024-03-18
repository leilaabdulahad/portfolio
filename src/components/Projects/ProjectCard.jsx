import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, demo, source },
}) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const shortDescription = description.split(" ").slice(0, 16).join(" ");

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
          {isReadMore ? "förminska" : "läs mer"}
        </button>
      </p>
      <div className={styles.links}>
        {demo && (
          <a href={demo} className={styles.link}>
          Live demo
        </a>
          )}
        <a href={source} className={styles.link}>
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;