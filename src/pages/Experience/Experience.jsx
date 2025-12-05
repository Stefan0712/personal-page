import styles from './experience.module.css';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { experience } from '../../data';
import { motion } from 'framer-motion';

const Experience = () => {
    const slideLeft = {
        hidden: { x: -100, opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };
    return (
        <motion.div 
            className={styles.experience} 
            id='experience'
            variants={{transition: { staggerChildren: 0.2}}}
        >
            <SectionTitle title="Experience" />
            {experience && experience.length > 0 ? experience.map(item=><motion.div 
                key={item.id} 
                className={styles.job}
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
            >
                <div className={styles.ring}/>
                <div className={styles.top}>
                    <h3>{item.role}</h3>
                    <p>{item.period}</p>
                </div>
                <b>{item.company}</b>
                <p>{item.description}</p>
            </motion.div>) : <p>Couldn't load experience. Try again later!</p>}
        </motion.div>
    )
}

export default Experience;

