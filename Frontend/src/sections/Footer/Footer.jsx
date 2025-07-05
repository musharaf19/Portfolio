import styles from './FooterStyles.module.css';
import insta from '../../assets/insta.png';
import snap from '../../assets/snap.png';
import facebook from '../../assets/facebook.png';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      
      <h4>let's connect via Socials</h4>
      <div className={styles.socialLinks}>
        <a
          href="https://instagram.com/musharaff.__"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <img src={insta} alt="Instagram" className={styles.socialIcon} />
        </a>
        <a
          href="https://snapchat.com/add/musharaf_aejaz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Snapchat"
        >
          <img src={snap} alt="Snapchat" className={styles.socialIcon} />
        </a>
        <a
          href="https://facebook.com/MusharafAejaz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <img src={facebook} alt="Facebook" className={styles.socialIcon} />
        </a>
      </div>
      <p>
        &copy; 2025 Musharaf Aejaz. <br />
        All rights reserved.
        
      </p>
    </section>
  );
}

export default Footer;
