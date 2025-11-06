import CopyIcon from "../../../../images/Icons/Copy";
import styles from './CopyModal.module.css';


const CopyModal = ({content, close, showNotification, copyText}) => {
    const handleCopy = () => {
        copyText(content);
        showNotification("Copied to clipboard!");
    }
    return ( 
        <div className={styles.modal}>
            <p onClick={handleCopy}>{content}</p>
            <CopyIcon onClic={handleCopy} />
            <button onClick={close}>Close</button>
        </div>
    );
}
 
export default CopyModal;