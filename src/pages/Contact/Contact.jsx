import SectionTitle from '../../components/SectionTitle/SectionTitle';
import styles from './Contact.module.css';
import Mail from '../../assets/mail.svg?react';
import Phone from '../../assets/phone.svg?react';
import Location from '../../assets/location.svg?react';
import Send from '../../assets/send.svg?react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {

    const [copied, setCopied] = useState(null);
    const [state, handleSubmit] = useForm("xayzpbkv");

    const handleCopy = (text, item) => {
        navigator.clipboard.writeText(text);
        setCopied(item);
        setTimeout(() => {
            setCopied(null);
        }, 2000);
    };
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
            }
        }
    };
    const itemVariants = {
        hidden: { 
            y: 20,
            opacity: 0 
        },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };
    return (
        <div className={styles.contact} id='contact'>
            <SectionTitle title="Get in touch with me" />
            <div className={styles.contactContent}>
                <motion.div 
                    className={styles.contactInfo}
                    initial='hidden'
                    whileInView="visible"
                    viewport={{once: true}}
                    variants={containerVariants}
                >
                    <motion.p variants={itemVariants}>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</motion.p>
                    <motion.div variants={itemVariants} className={styles.contactItem} onClick={()=>handleCopy('s.vladulescu@gmail.com', 'mail')}>
                        <div className={styles.contactIcon}>
                            <Mail />
                        </div>
                        <b>{copied === 'mail' ? 'Email copied to clipboard!' : 's.vladulescu@gmail.com'}</b>
                    </motion.div>
                    <motion.div variants={itemVariants} className={styles.contactItem} onClick={()=>handleCopy('+40724473060', 'phone')}>
                        <div className={styles.contactIcon}>
                            <Phone />
                        </div>
                        <b>{copied === 'phone' ? 'Number copied to clipboard!' : '+40 724 473 060'}</b>
                    </motion.div>
                    <motion.div variants={itemVariants} className={styles.contactItem}>
                        <div className={styles.contactIcon}>
                            <Location />
                        </div>
                        <b>Romania</b>
                    </motion.div>
                </motion.div>
                {state.succeeded ? <div className={styles.successMessage}>
                    <h3>Thank you for your message!</h3>
                </div> :
                    <motion.form 
                        className={styles.contactForm}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={containerVariants}
                        onSubmit={handleSubmit}
                    >
                        <motion.fieldset variants={itemVariants}>
                            <label htmlFor='name'>Name</label>
                            <input type='text' name='name' id='name' placeholder='Your Name'/>
                            <ValidationError prefix="Name" field="name" errors={state.errors}/>
                        </motion.fieldset>
                        <motion.fieldset variants={itemVariants}>
                            <label htmlFor='email'>Email</label>
                            <input type='email' name='email' id='email' placeholder='Your Email'/>
                            <ValidationError prefix="Email" field="email" errors={state.errors}/>
                        </motion.fieldset>
                        <motion.fieldset variants={itemVariants}>
                            <label htmlFor='message'>Message</label>
                            <textarea name='message' id='message' placeholder='Message'/>
                            <ValidationError prefix="Message" field="message" errors={state.errors}/>
                        </motion.fieldset>
                        <motion.button variants={itemVariants} disabled={state.submitting} type='submit'>Send Message <Send /></motion.button>
                    </motion.form>
                }
            </div>
        </div>
    )
}

export default Contact;