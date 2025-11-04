import styles from './Contact.module.css';
import CloseIcon from '../../../images/Icons/Close';
import PhoneIcon from '../../../images/Icons/Phone';
import CopyIcon from '../../../images/Icons/Copy';
import MailIcon from '../../../images/Icons/Mail';

const Contact = ({close}) => {
    return ( 
        <div className={styles.contact}>
            <div className={styles.header}>
                <h1>Contact</h1>
                <button className={styles.closeButton} onClick={close}><CloseIcon /></button>
            </div>
            <div className={styles.content}>
                <div className={styles.contentRow}>
                    <PhoneIcon  color='white'/>
                    <p>+40 750 232 781</p>
                    <CopyIcon  color='white'/>
                </div>
                <div className={styles.contentRow}>
                    <MailIcon  color='white'/>
                    <p>s.vladulescu@gmail.com</p>
                    <CopyIcon color='white'/>
                </div>
                <form>
                    <input type='text' placeholder='Subject'></input>
                    <input type='email' placeholder='Email Address'></input>
                    <textarea>Message...</textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
     );
}
 
export default Contact;