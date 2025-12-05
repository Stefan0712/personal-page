import styles from './SectionTitle.module.css';
import { motion } from 'framer-motion';

const SectionTitle = ({title}) => {
    const slideUP = {
        hidden: { y: -30, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };
    return(
        <motion.div 
            className={styles.sectionTitle}
            variants={slideUP} 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
        >
            <h2>{title}</h2>
            <div className={styles.sectionLine} />
        </motion.div>
    )
}

export default SectionTitle;