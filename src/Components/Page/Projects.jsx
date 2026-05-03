import React from "react";
import styles from "../Styles/Projects.module.css";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Trophy } from "lucide-react";
import data from "../Data/data";

const projects = data.projects;

const Projects = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>Featured Work</h1>
        <p className={styles.subtitle}>
          A curated collection of projects I've built and shipped
        </p>
      </motion.div>

      {/* Pinterest / Masonry grid — pure CSS columns */}
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
            style={{ "--accent": project.accent }}
          >
            {/* Glow blob */}
            <div
              className={styles.glow}
              style={{ background: project.accent }}
            />

            {/* Arrow */}
            <ArrowUpRight className={styles.arrow} size={20} />

            {/* Card body */}
            <div className={styles.cardContent}>
              {/* Hackathon badge — only for ElectionIQ */}
              {project.hackathon && (
                <span className={styles.hackBadge}>
                  <Trophy size={10} />
                  {project.hackathon}
                </span>
              )}

              {/* Index number */}
              <span className={styles.numBadge}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3
                className={styles.cardTitle}
                style={{ color: project.accent }}
              >
                {project.title}
              </h3>

              <p className={styles.cardDesc}>{project.description}</p>

              {/* Bullet highlights */}
              <ul className={styles.highlights}>
                {project.highlights.map((h, i) => (
                  <li key={i} className={styles.highlightItem}>
                    <CheckCircle2
                      size={13}
                      className={styles.checkIcon}
                      style={{ color: project.accent }}
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <hr className={styles.divider} />

            {/* Tech tags */}
            <div className={styles.techStack}>
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className={styles.techTag}
                  style={{
                    borderColor: `${project.accent}40`,
                    color: project.accent,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
