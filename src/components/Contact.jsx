import styles from '../styles/Contact.module.css';
import profileConfig from '../config/profile.json';

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>{profileConfig.contacts.title}</h2>
      <div className={styles.contactLinks}>
        {profileConfig.contacts.items.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
            title={contact.label}
          >
            <span className={styles.icon}>{contact.icon}</span>
            <span className={styles.label}>{contact.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
