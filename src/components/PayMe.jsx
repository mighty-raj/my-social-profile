import styles from '../styles/PayMe.module.css';

export default function PayMe() {
  const qrCodeUrl = 'https://via.placeholder.com/200'; // Replace with actual QR code URL

  return (
    <section className={styles.payMe}>
      <h2 className={styles.title}>Support Me</h2>
      <p className={styles.description}>
        If you'd like to support my work, you can scan the QR code below:
      </p>
      <div className={styles.qrContainer}>
        <img 
          src={qrCodeUrl} 
          alt="Payment QR Code" 
          className={styles.qrCode}
        />
      </div>
    </section>
  );
}
