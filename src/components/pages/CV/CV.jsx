import CloseIcon from '../../../images/Icons/Close';
import styles from './CV.module.css';



const CV = ({ close, showContact }) => {

  const generalLink = "https://drive.google.com/file/d/1fYrocNwm-JGxzCQgHj4JboiRqzX_7JMH/view?usp=sharing";
  const developerLink = "https://drive.google.com/file/d/1-YrWyPO34MyHeEi9TJZhEkvMiLRd_ksf/view?usp=sharing";

  const switchToContact = () =>{
    showContact();
    close();
  }
  return (
    <div className={styles.cv}>
      <div className={styles.header}>
        <h3>See my CV</h3>
        <button className={styles.closeButton} onClick={close}><CloseIcon /></button>
      </div>
      <a href={generalLink} target='_blank' rel='noreferrer'>General CV</a>
      <a href={developerLink} target='_blank' rel='noreferrer'>Developer CV</a>
      <button className={styles.contactButton} onClick={switchToContact}>Contact me</button>
    </div>
  );
};

export default CV;
