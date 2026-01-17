import styles from '../styles/Header.module.css';

export default function Header() {
  const profilePictureUrl = 'https://via.placeholder.com/150'; // Replace with actual URL
  const name = 'Your Name'; // Replace with actual name

  return (
    <header className={styles.header}>
      <img 
        src={profilePictureUrl} 
        alt={name} 
        className={styles.profilePicture}
      />
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.tagline}>Full Stack Developer | Tech Enthusiast</p>
    </header>
  );
}
