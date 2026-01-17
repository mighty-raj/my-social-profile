import styles from '../styles/Footer.module.css';
import profileConfig from '../config/profile.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        © {currentYear} {profileConfig.footer.copyrightName}. All rights reserved.
      </p>
    </footer>
  );
}
