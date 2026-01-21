import React from "react";
import styles from "../Styles/About.module.css";
import data from "../Data/data";
import Abt from "../../Assets/aboutpng.png";
import { GitHubCalendar } from "react-github-calendar";
import {
  SiTailwindcss,
  SiVercel,
  SiFirebase,
  SiNextdotjs,
  SiJavascript,
  SiRedux,
} from "react-icons/si";
import { FaReact, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import Contact from "./Contact";
import Projects from "./Projects";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.headerSection}>
          <div className={styles.textInfo}>
            <h1 className={styles.name}>{data.info.name}</h1>
            <h3 className={styles.title}>{data.info.title}</h3>
            <h2 className={styles.about}>{data.about.data}</h2>
          </div>
          <img src={Abt} alt="about" className={styles.profileImage} />
        </div>

        <div className={styles.calendarContainer}>
          <GitHubCalendar
            username="apex2224"
            colorScheme="dark"
            fontSize={16}
          />
        </div>

        <section className={styles.techSection}>
          <h2 className={styles.techTitle}>Technologies</h2>
          <div className={styles.marqueeContainer}>
            <div className={styles.marqueeTrack}>
              {[
                { Icon: SiJavascript, color: "#F7DF1E", title: "JavaScript" },
                { Icon: FaReact, color: "#61DAFB", title: "React" },
                { Icon: SiNextdotjs, color: "#ffffff", title: "Next.js" },
                { Icon: SiRedux, color: "#ffffff", title: "Redux" },
                {
                  Icon: VscVscode,
                  color: "#007ACC",
                  title: "VS Code",
                },
                {
                  Icon: SiTailwindcss,
                  color: "#06B6D4",
                  title: "Tailwind CSS",
                },
                { Icon: SiFirebase, color: "#FFCA28", title: "Firebase" },
                { Icon: SiVercel, color: "#ffffff", title: "Vercel" },
                { Icon: FaGithub, color: "#ffffff", title: "GitHub" },
                { Icon: FaHtml5, color: "#E44D26", title: "HTML5" },
                { Icon: FaCss3Alt, color: "#264DE4", title: "CSS3" },
                // Duplicate for infinite scroll
                { Icon: SiJavascript, color: "#F7DF1E", title: "JavaScript" },
                { Icon: FaReact, color: "#61DAFB", title: "React" },
                { Icon: SiNextdotjs, color: "#ffffff", title: "Next.js" },
                { Icon: SiRedux, color: "#76007cff", title: "Redux" },
                {
                  Icon: VscVscode,
                  color: "#007ACC",
                  title: "VS Code",
                },
                {
                  Icon: SiTailwindcss,
                  color: "#06B6D4",
                  title: "Tailwind CSS",
                },
                { Icon: SiFirebase, color: "#FFCA28", title: "Firebase" },
                { Icon: SiVercel, color: "#ffffff", title: "Vercel" },
                { Icon: FaGithub, color: "#ffffff", title: "GitHub" },
                { Icon: FaHtml5, color: "#E44D26", title: "HTML5" },
                { Icon: FaCss3Alt, color: "#264DE4", title: "CSS3" },
                {
                  Icon: VscVscode,
                  color: "#007ACC",
                  title: "VS Code",
                },
              ].map((tech, index) => (
                <div key={index} className={styles.techIcon} title={tech.title}>
                  <tech.Icon size={50} color={tech.color} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default About;
