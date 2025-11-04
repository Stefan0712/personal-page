import { useState } from 'react';
import CloseIcon from '../../../images/Icons/Close';
import styles from './CV.module.css';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const CV = ({ close }) => {
  const [selectedItem, setSelectedItem] = useState('general');

  const printPDF = () => {
    const win = window.open(selectedItem === "general" ? '/cv/general.pdf' : '/cv/developer.pdf');
    win.print();
  };

  const generalLink = "https://drive.google.com/file/d/1fYrocNwm-JGxzCQgHj4JboiRqzX_7JMH/view?usp=sharing";
  const developerLink = "https://drive.google.com/file/d/1-YrWyPO34MyHeEi9TJZhEkvMiLRd_ksf/view?usp=sharing";
  return (
    <div className={styles.cv}>
      <div className={styles.header}>
        <h2>See my CV</h2>
        <button onClick={close}><CloseIcon /></button>
      </div>

      <div className={styles.switch}>
        <button className={selectedItem === 'general' ? styles.selectedButton : ''} onClick={() => setSelectedItem('general')}>General</button>
        <button className={selectedItem === 'dev' ? styles.selectedButton : ''} onClick={() => setSelectedItem('dev')}>Developer</button>
      </div>

      <div className={styles.container}>
        <Document file={'/cv/general.pdf'} className={`${styles.cvDocument} ${selectedItem === "general" ? styles.showCV : ''}`}>
            <Page pageNumber={1} className={styles.cvPage}/>
        </Document>
        <Document file={'/cv/developer.pdf'} className={`${styles.cvDocument} ${selectedItem === "dev" ? styles.showCV : ''}`}>
            <Page pageNumber={1} className={styles.cvPage}/>
        </Document>
      </div>

      <div className={styles.buttonsContainer}>
        <a href={selectedItem === 'general' ? generalLink : developerLink} target='_blank' rel='noreferrer'>G Drive</a>
        <a href={selectedItem === "general" ? '/cv/general.pdf' : '/cv/developer.pdf'} download>Download</a>
        <button onClick={printPDF}>Print</button>
      </div>
    </div>
  );
};

export default CV;
