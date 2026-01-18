import styles from '../styles/Contact.module.css';
import profileConfig from '../config/profile.json';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: SiX,
  instagram: FaInstagram,
  email: FaEnvelope,
};

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.title}>{profileConfig.contacts.title}</h2>
      <div className={styles.contactLinks}>
        {profileConfig.contacts.items.map((contact) => {
          const IconComponent = iconMap[contact.id];
          return (
            <a
              key={contact.id}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
              title={contact.label}
            >
              {IconComponent ? <IconComponent className={styles.icon} /> : <span className={styles.icon}>{contact.icon}</span>}
              <span className={styles.label}>{contact.label}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
