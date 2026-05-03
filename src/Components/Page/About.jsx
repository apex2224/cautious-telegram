import React, { useRef, useCallback } from "react";
import styles from "../Styles/About.module.css";
import data from "../Data/data";
import Abt from "../../Assets/aboutpng.png";
import { GitHubCalendar } from "react-github-calendar";
import {
  SiTailwindcss,
  SiFirebase,
  SiNextdotjs,
  SiJavascript,
  SiAxios,
  SiMysql,
  SiPostman,
} from "react-icons/si";
import { FaReact, FaGithub, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { TbApi, TbAtom2 } from "react-icons/tb";
import Contact from "./Contact";
import Projects from "./Projects";

// Base tech list from resume
const techList = [
  { Icon: FaHtml5,        color: "#E44D26", title: "HTML5"        },
  { Icon: FaCss3Alt,      color: "#264DE4", title: "CSS3"         },
  { Icon: SiJavascript,   color: "#F7DF1E", title: "JavaScript"   },
  { Icon: FaReact,        color: "#61DAFB", title: "React.js"     },
  { Icon: SiNextdotjs,    color: "#ffffff", title: "Next.js"      },
  { Icon: TbAtom2,        color: "#61DAFB", title: "Context API"  },
  { Icon: TbApi,          color: "#00D4FF", title: "REST API"     },
  { Icon: SiAxios,        color: "#5A29E4", title: "Axios"        },
  { Icon: SiFirebase,     color: "#FFCA28", title: "Firebase"     },
  { Icon: SiMysql,        color: "#4479A1", title: "MySQL"        },
  { Icon: FaGitAlt,       color: "#F05032", title: "Git"          },
  { Icon: FaGithub,       color: "#ffffff", title: "GitHub"       },
  { Icon: VscVscode,      color: "#007ACC", title: "VS Code"      },
  { Icon: SiPostman,      color: "#FF6C37", title: "Postman"      },
  { Icon: SiTailwindcss,  color: "#06B6D4", title: "Tailwind CSS" },
];

const marqueeItems = [...techList, ...techList];

/* ── 3-D tilt card ─────────────────────────────── */
const TiltCard = ({ children, className }) => {
  const cardRef = useRef(null);
  const rafRef  = useRef(null);

  const onMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left) / width  - 0.5;   // -0.5 → 0.5
      const y = (e.clientY - top)  / height - 0.5;
      const rotY =  x * 22;   // max ±22 deg
      const rotX = -y * 18;   // max ±18 deg
      card.style.transform =
        `perspective(700px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.06,1.06,1.06)`;
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = "transform 0.6s cubic-bezier(.23,1,.32,1)";
    card.style.transform   = "perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    setTimeout(() => {
      if (card) card.style.transition = "";
    }, 600);
  }, []);

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

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

          {/* 3-D tilt wrapper */}
          <TiltCard className={styles.imageWrapper}>
            {/* Layered glow rings for depth */}
            <div className={styles.glowRing} />
            <div className={styles.glowRing2} />
            <img src={Abt} alt="Rohit Salooria" className={styles.profileImage} />
          </TiltCard>
        </div>

        {/* ── Premium GitHub Activity Card ── */}
        <div className={styles.calendarCard}>
          {/* Card header */}
          <div className={styles.calendarHeader}>
            <div className={styles.calendarHeaderLeft}>
              <span className={styles.liveDot} />
              <span className={styles.calendarLabel}>GitHub Activity</span>
            </div>
            <a
              href="https://github.com/apex2224"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ghLink}
            >
              @apex2224 ↗
            </a>
          </div>

          {/* Scanline overlay for texture */}
          <div className={styles.scanlines} aria-hidden="true" />

          {/* Calendar */}
          <div className={styles.calendarInner}>
            <GitHubCalendar
              username="apex2224"
              colorScheme="dark"
              fontSize={14}
              blockSize={13}
              blockMargin={4}
              theme={{
                dark: ["#0d1117", "#0e4429", "#006d32", "#26a641", "#39d353"],
              }}
            />
          </div>
        </div>

        <section className={styles.techSection}>
          <h2 className={styles.techTitle}>Technologies</h2>
          <div className={styles.marqueeContainer}>
            <div className={styles.marqueeTrack}>
              {marqueeItems.map((tech, index) => (
                <div key={index} className={styles.techIcon} title={tech.title}>
                  <tech.Icon size={48} color={tech.color} />
                  <span className={styles.techLabel}>{tech.title}</span>
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
