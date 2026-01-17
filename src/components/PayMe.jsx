import styles from '../styles/PayMe.module.css';
import profileConfig from '../config/profile.json';

export default function PayMe() {
  return (
    <section className={styles.payMe}>
      <h2 className={styles.title}>{profileConfig.payMe.title}</h2>
      <p className={styles.description}>
        {profileConfig.payMe.description}
      </p>
      <div className={styles.qrContainer}>
        <img 
          src={profileConfig.payMe.qrCodeUrl} 
          alt="Payment QR Code" 
          className={styles.qrCode}
        />
      </div>
    </section>
  );
}
