import styles from '../styles/Header.module.css';
import profileConfig from '../config/profile.json';

export default function Header({ onMenuClick }) {
  return (
    <header className={styles.header}>
      <button 
        className={styles.menuButton}
        onClick={onMenuClick}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
      <h1 className={styles.name}>{profileConfig.name}</h1>
      <p className={styles.tagline}>{profileConfig.tagline}</p>
      <p className={styles.subtitle}>{profileConfig.subtitle}</p>
      <img 
        src={profileConfig.profilePictureUrl} 
        alt={profileConfig.name} 
        className={styles.profilePicture}
      />
    </header>
  );
}
