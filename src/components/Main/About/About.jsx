import styles from './About.module.css';
import { courses, experiences } from './data';



const About = () => {
    return ( 
        <div className={styles.about}>
            <div className={`${styles.topRow} ${styles.module}`}>
                <div className={`${styles.aboutMe}`}>
                    <h4 className={styles.cardTitle}>About Me</h4>
                    <div className={styles.cardContent}>
                        <p>
                            I like building projects, coding, and exploring how things work. Recently I've been getting into home-labbing with my EliteDesk, and I enjoy gaming. 
                            I like creating things that are practical and organized, and I'm always curious to try new tools and ideas.
                        </p>
                    </div>
                </div>
                <div className={`${styles.education}`}>
                    <h4 className={styles.cardTitle}>Education</h4>
                    <div className={styles.cardContent}>
                        <div className={styles.educationItem}>
                            <b>Management</b>
                            <h5>Ovidius University Constanta</h5>
                        </div>
                        <div className={styles.educationItem}>
                            <b>Economic Activities Technician</b>
                            <h5>Colegiul Economic "Delta Dunarii" Tulcea</h5>
                        </div>
                    </div>
                </div>
                <div className={`${styles.languages}`}>
                    <h4 className={styles.cardTitle}>Languages</h4>
                    <div className={styles.cardContent}>
                        <div className={styles.languageItem}>
                            <b>English</b>
                            <div className={styles.languageLevel}>
                                <div className={styles.filledDot}></div>
                                <div className={styles.filledDot}></div>
                                <div className={styles.filledDot}></div>
                                <div className={styles.filledDot}></div>
                                <div className={styles.filledDot}></div>
                                <div className={styles.emptyDot}></div>
                            </div>
                        </div>
                        <div className={styles.languageItem}>
                            <b>Romanian</b>
                            <div className={styles.languageLevel}>
                                <div className={styles.filledDot}></div>
                                <div className={styles.filledDot}></div>
                                <div className={styles.filledDot}></div>
                                <div className={styles.filledDot}></div>
                                <div className={styles.filledDot}></div>
                                <div className={styles.filledDot}></div>
                            </div>
                        </div>
                        <div className={styles.languageItem}>
                            <b>Japanese</b>
                            <div className={styles.languageLevel}>
                                <div className={styles.filledDot}></div>
                                <div className={styles.emptyDot}></div>
                                <div className={styles.emptyDot}></div>
                                <div className={styles.emptyDot}></div>
                                <div className={styles.emptyDot}></div>
                                <div className={styles.emptyDot}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottomRow}>
                  <div className={`${styles.experience} ${styles.module}`}>
                    <h4 className={styles.cardTitle}>Work Experience</h4>
                    <div className={styles.cardContent}>
                        {experiences.map((item, index)=><div key={"Experience-"+index} className={styles.experienceItem}>
                            <div className={styles.experienceHeader}>
                                <b>{item.title}</b>
                                <p>{item.duration}</p>
                            </div>
                            <ul>
                                {item.description.map((d, index)=><li key={"description-item-"+index}>{d}</li>)}
                            </ul>
                            <b>Skills</b>
                            <div className={styles.jobSkills}>
                                {item.skills.map((s, index)=><p key={"job-skill-"+index}>{s}</p>)}
                            </div>
                        </div>)}
                    </div>
                </div>
                <div className={`${styles.courses} ${styles.module}`}>
                    <h4 className={styles.cardTitle}>Courses & certificates</h4>
                    <div className={styles.cardContent}>
                        {courses.map((course, index)=><div className={styles.courseItem}>
                            <div key={"Course-"+index} className={styles.courseHeader}>
                                <b>{course.name}</b>
                                <p>{course.provider}</p>
                            </div>
                            <ul className={styles.skillsLearned}>
                                {course.skills.map((skill,index)=><li key={"Course-skill-"+index}>{skill}</li>)}
                            </ul>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;