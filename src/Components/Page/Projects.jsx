import React from "react";
import styles from "../Styles/Projects.module.css";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
          A collection of projects I've worked on
        </p>
      </motion.div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            className={`${styles.card} ${styles[project.size] || ""}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.description}</p>
              <div className={styles.techStack}>
                {project.tech.map((t, i) => (
                  <span key={i} className={styles.techTag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {/* Placeholder Background Image */}
            <div
              className={styles.cardImage}
              style={{ background: `linear-gradient(45deg, #111, #222)` }}
            ></div>

            <ArrowUpRight className={styles.arrow} size={24} />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
