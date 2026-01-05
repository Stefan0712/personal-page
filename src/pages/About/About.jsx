import styles from './About.module.css';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Card from '../../components/Card/Card';
import { personalInfo, skills } from '../../data';
import { motion } from 'framer-motion';
import Pfp from '../../components/Card/pfp.jpg';
import LinkIcon from '../../assets/link.svg';
import GithubIcon from '../../assets/github.svg';
import LinkedinIcon from '../../assets/linkedin.svg';


const About = () => {

    const slideLeft = {
        hidden: { x: -100, opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };
    const slideUp = {
        hidden: { y: 50, opacity: 0 }, 
        visible: { 
            y: 0, 
            opacity: 1, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };

    return (
        <div className={styles.about} id='about'>
            <SectionTitle title='About Me' />
            <div className={styles.content}>
                <motion.div 
                    className={styles.personalInformation}
                    variants={slideLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                >
                    <div className={styles.personal}>
                        <img src={Pfp} alt='Profile Picture' className={styles.profilePicture}/>
                        <div className={styles.infoBlock}>
                            <h3>Personal Information</h3>
                            <p><b>Location:</b> Germany</p>
                            <p><b>Email:</b> s.vladulescu@gmail.com</p>
                            <p><a href={personalInfo.github} target='_blank'><img src={GithubIcon} alt='github icon'/> Github Profile</a></p>
                            <p><a href={personalInfo.linkedin} target='_blank'><img src={LinkedinIcon} alt='github icon'/> LinkedIn Profile</a></p>
                        </div>
                        <div className={styles.infoBlock}>
                            <h3>Languages</h3>
                            <div className={styles.language}>
                                <b>Romanian</b>
                                <div className={styles.languageDots}>
                                    <div className={styles.filledDot} /><div className={styles.filledDot} /><div className={styles.filledDot} /><div className={styles.filledDot} /><div className={styles.filledDot} /><div className={styles.filledDot} />
                                </div>
                                <p>Native</p>
                            </div>
                            <div className={styles.language}>
                                <b>English</b>
                                <div className={styles.languageDots}>
                                    <div className={styles.filledDot} /><div className={styles.filledDot} /><div className={styles.filledDot} /><div className={styles.filledDot} /><div className={styles.filledDot} /><div className={styles.dot} />
                                </div>
                                <p>C1</p>
                            </div>
                            <div className={styles.language}>
                                <b>Japanese</b>
                                <div className={styles.languageDots}>
                                    <div className={styles.filledDot} /><div className={styles.dot} /><div className={styles.dot} /><div className={styles.dot} /><div className={styles.dot} /><div className={styles.dot} />
                                </div>
                                <p>N5</p>
                            </div>
                        </div>
                    </div>
                    <p className={styles.bio}>
                        I'm a Software Developer based in Germany who enjoys building tools that actually help people—starting with myself. That's the drive behind projects like Acta and EasyFit: I wanted practical, offline-first apps that just work, so I built them.
                        My main focus is the React ecosystem (TypeScript, Node.js), but I don't like 'black boxes.' I spend my free time tinkering with my self-hosted Linux home lab, learning how infrastructure works by getting my hands dirty with Docker and networking.
                        With a background in customer service, I know that clear communication is just as important as clean code. I bring a positive, organized approach to solving problems, whether I'm debugging a server or coordinating with a team                    </p>
                </motion.div>
                    <motion.div 
                        className={styles.skills}
                        variants={{transition: { staggerChildren: 0.2 }}}
                    >
                        <motion.div
                            className={styles.skillsCard}
                            variants={slideUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                        >
                            <h3>Web Development</h3>
                            <ul>
                                {skills.dev.map(item=><li key={item}>{item}</li>)}
                            </ul>
                        </motion.div>
                        <motion.div
                            className={styles.skillsCard}
                            variants={slideUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                        >
                            <h3>Technical Foundation</h3>
                            <ul>
                                {skills.tech.map(item=><li key={item}>{item}</li>)}
                            </ul>
                        </motion.div>
                        <motion.div
                            className={styles.skillsCard}
                            variants={slideUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                        >
                            <h3>Design & Creative</h3>
                            <ul>
                                {skills.creative.map(item=><li key={item}>{item}</li>)}
                            </ul>
                        </motion.div>
                        <motion.div
                            className={styles.skillsCard}
                            variants={slideUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                        >
                            <h3>Professional Skills</h3>
                            <ul>
                                {skills.dev.map(item=><li key={item}>{item}</li>)}
                            </ul>
                        </motion.div>
                    </motion.div>
                {/* <Card /> */}
            </div>
        </div>
    )
}

export default About;