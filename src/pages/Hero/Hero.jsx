import Arrow from '../../assets/Arrow.svg?react';
import Download from '../../assets/Download.svg?react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';

const Hero = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {staggerChildren: 0.3, delayChildren: 0.1}
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 }, 
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };


    return (
        <div className={styles.hero} id='hero'>
            <motion.div 
                className={styles.heroContent}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h3 variants={itemVariants} className={styles.accentText}>Hello, I'm</motion.h3>
                <motion.h1 variants={itemVariants}>Ștefan Vlădulescu</motion.h1>
                <motion.h2 variants={itemVariants}>Full Stack Developer</motion.h2>
                <motion.p variants={itemVariants}>I like to build solutions for real problems. No vibe-coding, but passions-coding. I put my heart into projects that have meaning.</motion.p>
                <motion.div variants={itemVariants} className={styles.buttons}>
                    <button className={styles.viewProjects} onClick={()=>document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}>
                        View Projects
                        <Arrow />
                    </button>
                    <a href='https://drive.google.com/file/d/12453-wJ5bQHB8jpV848Gd-FwmANlQuAS/view?usp=sharing' target='_blank' className={styles.downloadCv}>
                        Download CV
                        <Download />
                    </a>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Hero;
