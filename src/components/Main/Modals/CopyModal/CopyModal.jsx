import CopyIcon from "../../../../images/Icons/Copy";
import styles from './CopyModal.module.css';


const CopyModal = ({content, close}) => {
    return ( 
        <div className={styles.modal}>
            <p>{content}</p>
            <CopyIcon />
            <button onClick={close}>Close</button>
        </div>
    );
}
 
export default CopyModal;