import React from "react";

import styles from "./Skills.module.css";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <h3 className={styles.title1}>Technical Skills</h3>
      <ul className={styles.content}>
        <li className={styles.list}>
          Front End Development (HTML,CSS,JS, React.js)
        </li>
        <li className={styles.list}>C & C++ programming</li>
        <li className={styles.list}>Operating System</li>
        <li className={styles.list}>Database Management System</li>
        <li className={styles.list}>Computer Networks</li>
        <li className={styles.list}>OOPS</li>
        <li className={styles.list}>Flutter</li>
      </ul>

      <h3 className={styles.title1}>Soft Skills</h3>
      <ul className={styles.content}>
        <li className={styles.list}>Time Management</li>
        <li className={styles.list}>Leadership</li>
        <li className={styles.list}>Strong Communication</li>
        <li className={styles.list}>Team Player</li>
      </ul>
    </section>
  );
};
