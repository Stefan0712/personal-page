import styles from './Qna.module.css';
import { qna } from '../../../Main/About/data';
import { useEffect, useRef, useState } from 'react';
import ArrowIcon from '../../../../images/Icons/Arrow';

const Questions = () => {
    const [expandedItem, setExpandedItem] = useState(null);


    return ( 
        <div className={`${styles.qna} scrollbar-white`}>
            <div className={styles.header}>
                <h4>Questions & Answers</h4>
            </div>
            <div className={styles.container}>
                {qna.map((item, index)=><div key={index} className={`${styles.qnaItem} ${index === expandedItem ? styles.expandedItem : ''}`}>
                   <div className={styles.top} onClick={()=>setExpandedItem(prev=>prev === index ? null : index)}>
                        <h4>{item.question}</h4>
                        <ArrowIcon />
                    </div>
                    <Answer answ={item.answer} expanded={expandedItem === index}/>
                </div>)}
            </div>
        </div>
     );
}
 
export default Questions;


const Answer = ({answ, expanded}) =>{

    const answRef = useRef(null);

    useEffect(()=>{
        const el = answRef.current;
        if(!el) return;
        if(expanded) {
            el.style.height = el.scrollHeight + 'px';
        } else {
            el.style.height = '0px';
        }
    })

    return (
        <div className={styles.answer} ref={answRef}>
            <b>Answer</b>
            <p>{answ}</p>
        </div>
    )
}