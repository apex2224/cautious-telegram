import React from "react";
import styles from "../Styles/Contact.module.css";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  FileText,
  ArrowRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Resume from "../../Assets/Rohit Salooria - React Developer.pdf";

const Contact = () => {
  return (
    <div className={styles.container}>
      {/* 1. Header Section */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>Let’s Work Together</h1>
        <p className={styles.subtitle}>
          Available for freelance, frontend, React projects
        </p>
      </motion.div>

      <div className={styles.mainContent}>
        {/* 2. Contact Info Cards */}
        <motion.div
          className={styles.infoWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.actionButtons}>
            <a
              href="mailto:rohitsalooria12@gmail.com"
              className={styles.emailBtn}
            >
              <Mail className={styles.btnIcon} />
              <span>Send Me an Email</span>
              <ArrowRight size={18} />
            </a>

            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeBtn}
            >
              <FileText className={styles.btnIcon} />
              <span>View Resume</span>
            </a>
          </div>

          <div className={styles.detailsGrid}>
            <div className={styles.infoCard}>
              <Mail className={styles.icon} />
              <span>rohitsalooria12@gmail.com</span>
            </div>
            <div className={styles.infoCard}>
              <Phone className={styles.icon} />
              <span>+91 80910 11912</span>
            </div>
            <div className={styles.infoCard}>
              <MapPin className={styles.icon} />
              <span>Himachal Pradesh, India</span>
            </div>
          </div>

          {/* Social Links Row */}
          <div className={styles.socialLinks}>
            <a
              href="https://github.com/apex2224"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rohit-salooria/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/1amrohit.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
