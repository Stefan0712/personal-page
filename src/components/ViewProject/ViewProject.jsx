import styles from './ViewProject.module.css';
import Repo from '../../assets/repo.svg?react';
import Commit from '../../assets/commit.svg?react';
import Time from '../../assets/time.svg?react'; 
import Github from '../../assets/github.svg?react'; 
import Checkmark from '../../assets/checkmark.svg?react'; 
import Wrench from '../../assets/wrench.svg?react'; 
import Bulb from '../../assets/bulb.svg?react'; 
import Link from '../../assets/link.svg?react'; 
import RightArrow from '../../assets/right-arrow.svg?react'; 
import LeftArrow from '../../assets/left-arrow.svg?react'; 
import Close from '../../assets/close.svg?react'; 


import { useEffect, useState } from 'react';

const ViewProject = ({project, close}) => {

    return (
        <div className={styles.viewProject}>
            <div className={styles.projectDescription}>
                <div className={styles.projectHeader}>
                    <h3>{project.title}</h3>
                    <button className={styles.closeButton} onClick={close}><Close /></button>
                </div>
            </div>
            <div className={styles.moreInfo}>
                <p>{project.longDescription ?? project.description}</p>
                <div className={styles.tech}>
                    {project.tech.length > 0 ? project.tech.map(item=><p key={item}>{item}</p>) : null}
                </div>
                {project.links ? <div className={styles.projectButtons}>
                    {project.links.repo ? <a className={styles.repoLink} href={project.links.repo} target='_blank'><Github /> Repository</a> : null}
                    {project.links.demo ? <a className={styles.demoLink} href={project.links.demo} target='_blank'><Link /> Live</a> : null}
                </div> : null}
                <div className={styles.projectFunctionality}>
                    {project.completed && project.completed.length > 0 ? <div className={styles.listTitle}>
                        <Checkmark />
                        <h4>What works now</h4>
                        </div> : null}
                    <ul>
                        {project?.completed?.map(i=><li key={i+Math.random()}>{i}</li>)}
                    </ul> 
                    {project.inProgress && project.inProgress.length > 0 ? <div className={styles.listTitle}>
                        <Wrench />
                        <h4>What I work on</h4>
                    </div> : null}
                    <ul>
                        {project?.inProgress?.map(i=><li key={i}>{i}</li>)}
                    </ul>
                    {project.planned && project.planned.length > 0 ? <div className={styles.listTitle}>
                        <Bulb />
                        <h4>Future plans</h4>
                    </div> : null}
                    <ul>
                        {project?.planned?.map(i=><li key={i}>{i}</li>)}
                    </ul>
                </div>
                <h3>Gallery</h3>
                {project.gallery && project.gallery.length > 0 ? <Gallery images={project.gallery} /> : <p>No images to show</p>}
                <div className={styles.projectUpdates}>
                    <Update projectData={project} />
                </div>
            </div>
        </div>
    )
}

export default ViewProject;

const Update = ({projectData}) => {

    const [commits, setCommits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCommits = async () => {
        setLoading(true);
        setError(null);
    
        try {
            const response = await fetch(`https://api.github.com/repos/Stefan0712/${projectData.repoName}/commits?per_page=3`);
            if (!response.ok) throw new Error('Failed to fetch');
            const data = await response.json();
            const formattedData = data.map(commit => ({
                message: commit.commit.message,
                date: new Date(commit.commit.author.date),
                url: commit.html_url
            }));
            setCommits(formattedData);
        } catch (err) {
            setError(true);
            console.error(err)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if(projectData.repoName){
            fetchCommits();
        }
    }, [projectData.repoName]);

    const formatDate = (dateObj) => {
        return dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };
    
    return (
        <div className={styles.update}>
            <div className={styles.updateHeader}>
                <Repo />
                <h3>Latest Commits</h3>
            </div>
            {projectData.repoName ? 
            <div className={styles.commits}>
                {!loading && commits?.length > 0 ? commits.map(commit=><a key={commit.date} href={commit.url} target='_blank' className={styles.commit}>
                    <div className={styles.top}>
                        <Commit />
                        <p className={styles.commitMessage}>{commit.message}</p>
                    </div>
                    <div className={styles.commitMeta}>
                        <Time />
                        <p>{formatDate(commit.date)}</p>
                    </div>
                </a>) : <p className={styles.loadingError}>Failed to load commits. <b onClick={fetchCommits}>Press to try again</b></p>}
            </div> : <p className={styles.loadingError}>There are no commits for this project.</p>
            }
        </div>
    )
}

const Gallery = ({images}) => {
    
    const [selectedImage, setSelectedImage] = useState(0);

    const handleNext = () => {
        if(images.length - 1 > selectedImage){
            setSelectedImage(prev=>prev+1)
        }
    }
    const handlePrev = () => {
        if(selectedImage > 0){
            setSelectedImage(prev=>prev-1)
        }
    }

    return (
        <div className={styles.gallery}>
            <button onClick={handlePrev}><LeftArrow /></button>
            <div className={styles.imageContainer}>
                <img src={images[selectedImage]} alt='' />
            </div>
            <button onClick={handleNext}><RightArrow /></button>
        </div>
    )
}