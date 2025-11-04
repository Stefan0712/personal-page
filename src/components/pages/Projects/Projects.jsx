import GithubIcon from '../../../images/Icons/Github';
import LinkIcon from '../../../images/Icons/Link';
import styles from './Projects.module.css';
import { projects } from './projects';

const Projects = () => {
    return ( 
        <div className={styles.projects}>
            {projects && projects.length > 0 ? projects.map((project, index)=> <Project data={project} key={index} /> ) : null}
        </div>
    );
}
 
export default Projects;



const Project = ({data}) =>{
    return (
        <div className={styles.project}>
        <div className={styles.projectHeader}>
            <h3>{data.name}</h3>
        </div>
        <p className={styles.projectDescription}>{data.description}</p>
        <div className={styles.technologies}>{data.technologies?.length > 0 ? data.technologies.map(t=><p>{t}</p>) : null}</div>
        <div className={styles.buttons}>
            <a href={data.repoLink} target="_blank" rel='noreferrer'><GithubIcon color='white'/> Github</a>
            {data.liveLink !== "" ? <a href={data.liveLink} target="_blank" rel="noreferrer"><LinkIcon color='white'/> Try it!</a> : null}
        </div>
    </div>
    )
}