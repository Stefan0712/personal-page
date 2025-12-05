import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { certifications, education } from '../../data';
import styles from './Education.module.css';
import GraduationCap from '../../assets/Graduation-cap.svg?react';
import Medal from '../../assets/Medal.svg?react';
import { motion } from 'framer-motion';

const Education = () => {
    const slideLeft = {
        hidden: { x: -100, opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };
    const slideDown = {
        hidden: { y: -40, opacity: 0 }, 
        visible: { 
            y: 0, 
            opacity: 1, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };
    return (
        <div className={styles.education} id='education'>
            <SectionTitle title="Education & Certifications" />
            <div className={styles.educationContent}>
                <div className={styles.formalEducation}>
                    <div className={styles.categoryTitle}>
                        <GraduationCap />
                        <h2>Education</h2>
                    </div>
                    {education && education.length > 0 ? education.map(item=><motion.div
                        className={styles.school}
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        key={item.degree} 
                    >
                        <h3>{item.degree}</h3>
                        <b>{item.institution}</b>
                        <p>{item.period}</p>
                    </motion.div>) : <p>Failed to load this list.</p>}
                </div>
                <motion.div 
                    className={styles.courses}
                    variants={{transition: { staggerChildren: 0.2 }}}
                >
                    <div className={styles.categoryTitle}>
                        <Medal />
                        <h2>Certifications</h2>
                    </div>
                     {certifications && certifications.length > 0 ? certifications.map(item=><motion.div
                        className={styles.course}
                        key={item}
                        variants={slideDown}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                    >
                        <p>{item}</p>
                    </motion.div>) : <p>Failed to load this list.</p>}
                </motion.div>
            </div>
        </div>
    )
}

export default Education;