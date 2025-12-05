import { personalInfo } from '../../data';
import styles from './Footer.module.css';
import Linkedin from '../../assets/linkedin.svg?react';
import Github from '../../assets/github.svg?react';
import Email from '../../assets/mail.svg?react';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>© {new Date().getFullYear()} Ștefan Vlădulescu. All rights reserved.</p>
            <div className={styles.contactButtons}>
                <a href={personalInfo.linkedin} target='_blank'><Linkedin /></a>
                <a href={personalInfo.github} target='_blank'><Github /></a>
                <button><Email /></button>
            </div>
        </div>
    )
}

export default Footer;