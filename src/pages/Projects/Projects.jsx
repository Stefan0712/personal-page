import styles from './Projects.module.css';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Github from '../../assets/github.svg?react';
import Link from '../../assets/link.svg?react';
import Server from '../../assets/server.svg';
import Info from '../../assets/info.svg?react';
import { projects } from '../../data';
import { useState } from 'react';
import ViewProject from '../../components/ViewProject/ViewProject';
import { motion } from 'framer-motion';

const Projects = () => {

    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <motion.div 
            className={styles.projects} 
            id='projects'
            variants={{transition: {staggerChildren: 0.2}}}
        >
            {selectedProject ? <ViewProject project={selectedProject} close={()=>setSelectedProject(null)}/> : null}
            <SectionTitle title={"Featured Projects"} />
            <div className={styles.projectsContainer}>
                {projects.map(project=><Project selectProject={(projectData)=>setSelectedProject(projectData)} project={project} key={project.title} />)}
            </div>
        </motion.div>
    )
}

export default Projects;

const Project = ({project, selectProject}) => {
    const slideUp = {
        hidden: { y: 40, opacity: 0 }, 
        visible: { 
            y: 0, 
            opacity: 1, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };
    return (        
        <motion.div 
            className={styles.project} 
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
        >
            <div className={styles.projectHeader}>
                <img src={project.logoUrl ?? Server} alt={project.title} className={styles.projectLogo}/>
                <h3>{project.title}</h3>
                <button onClick={()=>selectProject(project)} className={styles.detailsButton}><Info /></button>
            </div>
            <p>{project.description}</p>
            <div className={styles.techStack}>
                {project.tech.map(item=><p key={item}>{item}</p>)}
            </div>
            {project.links ? <div className={styles.projectButtons}>
                <a href={project.links.repo} target='_blank' className={styles.repoButton}>
                    <Github /> Repository
                </a>
                <a href={project.links.demo} target='_blank' className={styles.demoButton}>
                    <Link /> Live Demo
                </a>
            </div> : null}
        </motion.div>
    )
}