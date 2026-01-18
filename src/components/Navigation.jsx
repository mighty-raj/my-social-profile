import styles from '../styles/Navigation.module.css';

export default function Navigation({ isOpen, onClose }) {
  const sections = [
    { id: 'about', label: 'About Me' },
    { id: 'contact', label: 'Get in Touch' }
  ];

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose} />}
      <nav className={`${styles.navigation} ${isOpen ? styles.open : ''}`}>
        <button 
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close navigation"
        >
          ✕
        </button>
        <h3 className={styles.navTitle}>Navigation</h3>
        <ul className={styles.navList}>
          {sections.map((section) => (
            <li key={section.id}>
              <a 
                href={`#${section.id}`} 
                className={styles.navLink}
                onClick={onClose}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
