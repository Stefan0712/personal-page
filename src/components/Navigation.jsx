import styles from './Navigation.module.css';

import Linkedin from '../assets/linkedin.svg?react';
import Github from '../assets/github.svg?react';
import Email from '../assets/mail.svg?react';
import Menu from '../assets/menu.svg?react';


import { personalInfo } from '../data';
import { useState } from 'react';

const Navigation = () => {

    const [showMenu, setShowMenu] = useState(false);

    const scrollTo = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    

    return (
        <div className={styles.navigation}>
            <div className={styles.buttons}>
                <div className={styles.navigationButtons}>
                    <button onClick={()=>scrollTo('hero')}>Home</button>
                    <button onClick={()=>scrollTo('about')}>About</button>
                    <button onClick={()=>scrollTo('experience')}>Experience</button>
                    <button onClick={()=>scrollTo('education')}>Education</button>
                    <button onClick={()=>scrollTo('projects')}>Projects</button>
                    <button onClick={()=>scrollTo('contact')}>Contact</button>
                </div>
                <div className={styles.contactButtons}>
                    <div className={styles.divider} />
                    <a href={personalInfo.linkedin} target='_blank'><Linkedin /></a>
                    <a href={personalInfo.github} target='_blank'><Github /></a>
                    <button onClick={()=>scrollTo('contact')}><Email /></button>
                </div>
                <button className={styles.mobileMenuButton} onClick={()=>setShowMenu(prev=>!prev)}>
                    <Menu />
                </button>
                {showMenu ? <MobileMenu handleScroll={scrollTo} close={()=>setShowMenu(false)} /> : null}
            </div>
        </div>
    )
}

export default Navigation;

const MobileMenu = ({close, handleScroll}) => {


    const scrollTo = (section) => {
        handleScroll(section);
        close();
    }
    return (
        <div className={styles.mobileMenu}>
            <button onClick={()=>scrollTo('home')}>Home</button>
            <button onClick={()=>scrollTo('about')}>About</button>
            <button onClick={()=>scrollTo('experience')}>Experience</button>
            <button onClick={()=>scrollTo('education')}>Education</button>
            <button onClick={()=>scrollTo('projects')}>Projects</button>
            <button onClick={()=>scrollTo('contact')}>Contact</button>
            <div className={styles.contactButtons}>
                <a href={personalInfo.linkedin} target='_blank'><Linkedin /></a>
                <a href={personalInfo.github} target='_blank'><Github /></a>
                <button onClick={()=>scrollTo('contact')}><Email /></button>
            </div>
        </div>
    )
}