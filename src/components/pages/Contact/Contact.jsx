import styles from './Contact.module.css';
import CloseIcon from '../../../images/Icons/Close';
import PhoneIcon from '../../../images/Icons/Phone';
import CopyIcon from '../../../images/Icons/Copy';
import MailIcon from '../../../images/Icons/Mail';

import { useForm, ValidationError } from '@formspree/react';
import { useEffect } from 'react';

const Contact = ({close, showNotification, copyText}) => {

    const handleCopy = (text, notification) => {
        copyText(text);
        showNotification(notification);
    }

    const [state, handleSubmit] = useForm("xayzpbkv");

    useEffect(() => {
        if (state.succeeded) {
            showNotification("Message sent!");
            close();
        }
    }, [state.succeeded, showNotification, close]);


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
                    <button className={styles.copyButton} onClick={()=>handleCopy('+40724473060','Phone number copied to clipboard!')}><CopyIcon color='white'/></button>
                </div>
                <div className={styles.contentRow}>
                    <MailIcon  color='white'/>
                    <p>s.vladulescu@gmail.com</p>
                    <button className={styles.copyButton} onClick={()=>handleCopy('s.vladulescu@gmail.com','Email copied to clipboard!')}><CopyIcon color='white'/></button>
                </div>
                <form onSubmit={handleSubmit}>
                    <input id="subject" name='subject' type='text' placeholder='Subject'></input>
                    <ValidationError 
                        prefix="Subject" 
                        field="subject"
                        errors={state.errors}
                    />
                    <input id='email' name='email' type='email' placeholder='Email Address'></input>
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    <textarea id='message' name='message' defaultValue={"Message..."}></textarea>
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    <button type="submit" disabled={state.submitting}>Send</button>
                </form>
            </div>
        </div>
     );
}
 
export default Contact;