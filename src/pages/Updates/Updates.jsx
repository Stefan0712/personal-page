import SectionTitle from '../../components/SectionTitle/SectionTitle';
import styles from './Updates.module.css';


const Updates = () => {

    const repos = [
        {
            name: "fitness-app",
            title: 'Fitness App',
            url: 'https://github.com/Stefan0712/fitness-app'
        },
        {
            name: 'docket',
            title: 'Docket',
            url: 'https://github.com/Stefan0712/docket'
        },
    ];


    return (
        <div className={styles.updates} id='updates'>
            <SectionTitle title="Projects updates" />
            <div className={styles.updatesContainer}>
                {repos.map(repo=><Update update={repo} />)}
            </div>
        </div>
    )
}

export default Updates;


