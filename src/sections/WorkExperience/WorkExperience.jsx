/* eslint-disable react/no-unknown-property */
import styles from "./WorkExperienceStyles.module.css";
import tcs from "../../assets/tcs.png";
import WorkCard from "../../common/WorkCard";
function WorkExperience() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Work Experience</h1>
      <div className={styles.WorkExperienceContainer}>
        <WorkCard
          src={tcs}
          link=""
          h3="Tata Consultancy Services 3.3 years"
          p="System Engineer - Frontend
         Engineer"
        ></WorkCard>
      </div>
    </section>
  );
}

export default WorkExperience;
