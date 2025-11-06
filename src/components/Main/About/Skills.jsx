import styles from './About.module.css';
import { professionalSkills, technicalSkills } from './data';

const Skills = () => {
    return ( 
        <div className={styles.mySkills}>
            <div className={styles.category}>
                <b>Technical</b>
                {technicalSkills.map((item,index)=><p key={"technical-skill-"+index}>{item}</p>)}
            </div>
            <div className={styles.category}>
                <b>Professional</b>
                {professionalSkills.map((item,index)=><p key={"professional-skill-"+index}>{item}</p>)}
            </div>
        </div>
    );
}
 
export default Skills;