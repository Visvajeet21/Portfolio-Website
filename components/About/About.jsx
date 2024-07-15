import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../util";
/* About myself , location, age, hobbies and intrest */

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h1 className={styles.title}>About</h1>
      <div className={styles.content}>
        <p className={styles.description}>
          I am a team player with a positive attitude towards achieving both
          individualand organizational goals. My excellent communication skills
          allow me toeffectively engage with a wide range of people. I am
          seeking an opportunity to leverage my knowledge and experience to
          contribute to an organization's success and enhance its operational
          efficiency which matches my skill sets.
        </p>
      </div>
      <div>
        <h2 className={styles.title1}>Hobbies</h2>
        <ul className={styles.aboutItems}>
          <li className={styles.list}>Painting</li>
          {/* <img
            src={getImageUrl("about/painting.png")}
            alt="Paint Icon"
            className={styles.paintIcon}
          /> */}
          <li className={styles.list}>Photography</li>
          <li className={styles.list}>Dramatics</li>
        </ul>
      </div>
    </section>
  );
};
