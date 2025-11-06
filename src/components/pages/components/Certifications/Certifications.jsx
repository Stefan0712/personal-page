import styles from './Certification.module.css';
import { courses } from '../../../Main/About/data';
import { useEffect, useRef, useState } from 'react';
import ArrowIcon from '../../../../images/Icons/Arrow';

const Certifications = () => {
    const [expandedItem, setExpandedItem] = useState(null);


    return ( 
        <div className={`${styles.certifications} scrollbar-white`}>
            <div className={styles.header}>
                <h4>Certifications & Courses</h4>
            </div>
            <div className={styles.container}>
                {courses.map((item, index)=><div key={index} className={`${styles.courseItem} ${index === expandedItem ? styles.expandedItem : ''}`}>
                   <div className={styles.visible} onClick={()=>setExpandedItem(prev=>prev === index ? null : index)}>
                        <div className={styles.courseHeader}>
                            <h4>{item.name}</h4>
                            <p className={styles.duration}>{item.provider}</p>
                            <ArrowIcon />
                        </div>
                    </div>
                    <MoreInfo data={{shortDescription: item.shortDescription, skills: item.skills}} expanded={expandedItem === index}/>
                </div>)}
            </div>
        </div>
     );
}
 
export default Certifications;



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
            <p className={styles.shortDescription}>{data.shortDescription}</p>
            <b>Skills</b>
            <div className={styles.skills}>
                {data.skills.map((s, index)=><p key={"job-skill-"+index}>{s}</p>)}
            </div>
        </div>
    )
}