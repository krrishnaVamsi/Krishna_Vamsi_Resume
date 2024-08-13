import styles from "./HeroStyles.module.css";
import HeroImg from "../../assets/file.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  // eslint-disable-next-line no-unused-vars
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const linkedInIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={HeroImg}
          alt="Profile picture of Krishna Vamsi"
        ></img>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Krishna <br /> Vamsi
        </h1>
        <h2> Frontend Developer</h2>
        <span>
          <a href="https://linkedin.com" target="_blank"></a>
          <img src={linkedInIcon} alt="LinkedIn Icon" />
          <a href="https://github.com" target="_blank"></a>
          <img src={githubIcon} alt="gitHub Icon" />
        </span>
        <p className={styles.description}>
          With a passion for developing modern web applications using Angular,
          React
        </p>
        <a href={CV} download>
          <button className="hover"> Resume </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
