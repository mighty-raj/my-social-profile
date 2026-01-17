import styles from '../styles/About.module.css';

export default function About() {
  return (
    <section className={styles.about}>
      <h2 className={styles.title}>About Me</h2>
      <p className={styles.bio}>
        Welcome to my profile! I'm a passionate developer with experience in 
        building web applications. I love working with modern technologies like 
        React, FastAPI, and cloud services.
      </p>
      <p className={styles.bio}>
        Always eager to learn new things and take on challenging projects.
      </p>
    </section>
  );
}
