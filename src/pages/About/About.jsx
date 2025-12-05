import styles from './About.module.css';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Card from '../../components/Card/Card';
import { skills } from '../../data';
import { motion } from 'framer-motion';


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
                <div className={styles.left}>
                    <motion.p 
                        className={styles.bio}
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                    >
                        I'm a web developer who enjoys building tools that actually help people, starting with myself. I taught myself to code by creating projects I use daily, like a shopping list app and an offline-first fitness tracker.
                        My main focus is React, but I don't like 'black boxes.' I've built WordPress themes from scratch in PHP, and I spend my free time tinkering with my Linux home server. I'm not an expert sysadmin yet, but breaking and fixing my own infrastructure is how I learn what happens behind the scenes.
                        My background in customer service taught me that clear communication is just as important as clean code. I bring a positive, organized approach to my work, and I'm always ready to learn something new. Currently based in Germany, I'm usually found coding, gaming, or struggling through my Japanese lessons.
                    </motion.p>
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
                </div>
                <Card />
            </div>
        </div>
    )
}

export default About;