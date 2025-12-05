import styles from './Projects.module.css';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Folder from '../../assets/folder.svg?react';
import Github from '../../assets/github.svg?react';
import Link from '../../assets/link.svg?react';
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
            onClick={()=>selectProject(project)}
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
        >
            <div className={styles.thumbnailContainer}>
                <img src={project.imgSrc} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </motion.div>
    )
}