import styles from '../styles/About.module.css';
import profileConfig from '../config/profile.json';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.title}>{profileConfig.about.title}</h2>
      {profileConfig.about.bio.map((paragraph, index) => (
        <p key={index} className={styles.bio}>
          {paragraph}
        </p>
      ))}
    </section>
  );
}
