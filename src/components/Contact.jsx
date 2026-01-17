import styles from '../styles/Contact.module.css';

export default function Contact() {
  const contacts = [
    {
      id: 'email',
      label: 'Email',
      icon: '📧',
      link: 'mailto:your-email@example.com'
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      icon: '💼',
      link: 'https://linkedin.com/in/your-profile'
    },
    {
      id: 'twitter',
      label: 'Twitter',
      icon: '𝕏',
      link: 'https://twitter.com/your-handle'
    },
    {
      id: 'instagram',
      label: 'Instagram',
      icon: '📸',
      link: 'https://instagram.com/your-handle'
    }
  ];

  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>Get in Touch</h2>
      <div className={styles.contactLinks}>
        {contacts.map((contact) => (
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
