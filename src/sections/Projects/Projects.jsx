// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./ProjectStyles.module.css";
import viber from "../../assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";
import freshBurger from "../../assets/fresh-burger.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viber}
          link="https://www.githuib.com"
          h3="viber"
          p="Streaming App"
        ></ProjectCard>
        <ProjectCard
          src={freshBurger}
          link="https://www.githuib.com"
          h3="Fresh Burgerr"
          p="food Delivery App"
        ></ProjectCard>
      </div>
    </section>
  );
}

export default Projects;
