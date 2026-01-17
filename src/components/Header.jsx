import styles from '../styles/Header.module.css';
import profileConfig from '../config/profile.json';

export default function Header() {
  return (
    <header className={styles.header}>
      <img 
        src={profileConfig.profilePictureUrl} 
        alt={profileConfig.name} 
        className={styles.profilePicture}
      />
      <h1 className={styles.name}>{profileConfig.name}</h1>
      <p className={styles.tagline}>{profileConfig.tagline}</p>
    </header>
  );
}
