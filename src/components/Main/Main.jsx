import styles from './Main.module.css';
import ProfilePicture from '../../images/pfp.jpg';
import PhoneIcon from '../../images/Icons/Phone';
import ShareIcon from '../../images/Icons/Share';
import InstagramIcon from '../../images/Icons/Instagram';
import FacebookIcon from '../../images/Icons/Facebook';
import LinkedinIcon from '../../images/Icons/Linkedin';
import FolderIcon from '../../images/Icons/Folder';
import GithubIcon from '../../images/Icons/Github';
import { useState } from 'react';
import CopyModal from './Modals/CopyModal/CopyModal';
import Contact from '../pages/Contact/Contact';
import CV from '../pages/CV/CV';

const Main = ({setShowComponent, showComponent}) => {

    const [showCopyModal, setShowCopyModal] = useState(null);
    const [showContactModal, setShowContactModal] = useState(false);
    const [showCV, setShowCV] = useState(false);


    return ( 
        <div className={`${styles.main} ${showComponent ? styles.componentShown : ''}`}>
            {showCopyModal ? <CopyModal content={showCopyModal} close={()=>setShowCopyModal(null)}/> : null}
            {showContactModal ? <Contact close={()=>setShowContactModal(false)} /> : null}
            {showCV ? <CV close={()=>setShowCV(false)} /> : null}
            <img src={ProfilePicture} alt="" className={styles.profilePicture} />
            <h1 className={styles.fullName}> Vladulescu Stefan </h1>

            <div className={styles.shareButton}>
                <button onClick={()=>setShowCopyModal('https://stefanvladulescu.com')}>
                    <ShareIcon />
                </button>
            </div>
            <div className={styles.buttonsContainer}>
                <button className={`${styles.socialButton} ${styles.secondaryShareButton}`} onClick={()=>setShowCopyModal('https://stefanvladulescu.com')}>
                    <div className={styles.socialIcon}>
                        <ShareIcon color='white'/>
                    </div>
                    <p className={styles.socialName}>Share</p>
                </button>
                <button className={styles.socialButton} onClick={()=>setShowComponent('about')}>
                    <div className={styles.socialIcon}>
                        <GithubIcon color='white'/>
                    </div>
                    <p className={styles.socialName}>About</p>
                </button>
                <button className={styles.socialButton} onClick={()=>setShowComponent('projects')}>
                    <div className={styles.socialIcon}>
                        <FolderIcon color='white'/>
                    </div>
                    <p className={styles.socialName}>Projects</p>
                </button>
                <button className={styles.socialButton} onClick={()=>setShowContactModal(prev=>!prev)}>
                    <div className={styles.socialIcon}>
                        <PhoneIcon color='white'/>
                    </div>
                    <p className={styles.socialName}>Contact</p>
                </button>
                <a href="https://github.com/Stefan0712" target="_blank" className={styles.socialButton} rel='noreferrer'>
                    <div className={styles.socialIcon}>
                        <GithubIcon color='white'/>
                    </div>
                    <p className={styles.socialName}>Github</p>
                </a>
                <a href="https://www.instagram.com/stefan_0612/" target="_blank" className={styles.socialButton} rel='noreferrer'>
                    <div className={styles.socialIcon}>
                        <InstagramIcon color='white'/>
                    </div>
                    <p className={styles.socialName}>Instagram</p>
                </a>
                <a href="https://www.facebook.com/vladulescu.stefan.18" target="_blank" className={styles.socialButton} rel='noreferrer'>
                    <div className={styles.socialIcon}>
                        <FacebookIcon color='white'/>
                    </div>
                    <p className={styles.socialName}>Facebook</p>
                </a>
                <a href="https://www.linkedin.com/in/stefan-vladulescu/" target="_blank" className={styles.socialButton} rel='noreferrer'>
                    <div className={styles.socialIcon}>
                        <LinkedinIcon color='white'/>
                    </div>
                    <p className={styles.socialName}>LinkedIn</p>
                </a>
            </div>
            <button className={styles.cvButton} onClick={()=>setShowCV(prev=>!prev)}>See my CV</button>
        </div>
    );
}
 
export default Main;