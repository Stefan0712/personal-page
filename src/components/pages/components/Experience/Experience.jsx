import styles from './Experience.module.css';
import { experiences } from '../../../Main/About/data';
import { useEffect, useRef, useState } from 'react';
import ArrowIcon from '../../../../images/Icons/Arrow';

const Experience = () => {
    const [expandedItem, setExpandedItem] = useState(null);
    return ( 
        <div className={`${styles.experience} scrollbar-white`}>
            <div className={styles.header}>
                <h4>Experience</h4>
            </div>
            <div className={styles.container}>
                {experiences.map((item, index)=><div key={index} className={`${styles.experienceItem} ${index === expandedItem ? styles.expandedItem : ''}`}>
                   <div className={styles.visible} onClick={()=>setExpandedItem(prev=>prev === index ? null : index)}>
                        <div className={styles.experienceHeader}>
                            <h4>{item.title}</h4>
                            <p className={styles.duration}>{item.duration}</p>
                            <ArrowIcon />
                        </div>
                        {/* <p className={styles.shortDescription}>{item.shortDescription}</p> */}
                    </div>
                    <MoreInfo data={{skills: item.skills, description: item.description}} expanded={expandedItem === index} />
                </div>)}
            </div>
        </div>
     );
}
 
export default Experience;


const MoreInfo = ({data, expanded}) =>{

    const infoRef = useRef(null);

    useEffect(()=>{
        const el = infoRef.current;
        if(!el) return;
        if(expanded) {
            el.style.height = el.scrollHeight + 'px';
        } else {
            el.style.height = '0px';
        }
    })

    return (
        <div className={styles.moreInfo} ref={infoRef}>
            <ul>
                {data.description.map((d, index)=><li key={"description-item-"+index}>{d}</li>)}
            </ul>
            <b>Skills</b>
            <div className={styles.jobSkills}>
                {data.skills.map((s, index)=><p key={"job-skill-"+index}>{s}</p>)}
            </div>
        </div>
    )
}