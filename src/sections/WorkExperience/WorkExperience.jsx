/* eslint-disable react/no-unknown-property */
import styles from "./WorkExperienceStyles.module.css";
import tcs from "../../assets/tcs.png";
import ascendionlite from "../../assets/ascendion.png";
import ascendionDark from "../../assets/ascendionwhite.png";

import WorkCard from "../../common/WorkCard";
import { useTheme } from "../../common/ThemeContext";
function WorkExperience() {

  const { theme, toggleTheme } = useTheme();

    const ascendion = theme === "light" ? ascendionlite : ascendionDark;
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Work Experience</h1>
      <div className={styles.WorkExperienceContainer}>
        <WorkCard
          src={ascendion}
          link=""
          h3="ascendion engineering private limited."
          p="Angular developer"
        ></WorkCard>
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
