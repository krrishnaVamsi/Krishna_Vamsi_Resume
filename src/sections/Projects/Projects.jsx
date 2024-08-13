// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./ProjectStyles.module.css";
import Handcrafted from "../../assets/handcrafted.png";
import ProjectCard from "../../common/ProjectCard";
import Blockchain from "../../assets/blockchain.png";
import BBS from "../../assets/bbs.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Handcrafted}
          link="https://github.com/krrishnaVamsi/handcrafted"
          h3="Handcrafted"
          p="E-commerce for Hand-made artifacts"
        ></ProjectCard>
        <ProjectCard
          src={Blockchain}
          link="https://github.com/krrishnaVamsi/DS157_Hexacoders"
          h3="BBFS"
          p="Blockchain Based Farmer Scheme System"
        ></ProjectCard>
        <ProjectCard
          src={BBS}
          link="https://github.com/krrishnaVamsi/DS157_Hexacoders"
          h3="BBS"
          p="Blockchain Based Student certificate Verification"
        ></ProjectCard>
      </div>
    </section>
  );
}

export default Projects;
