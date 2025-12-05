import styles from './Card.module.css';
import Star from '../../assets/star.svg?react';
import Sign from '../../assets/sagittarius.svg?react';
import Cat from '../../assets/cat.svg?react';
import Language from '../../assets/language.svg?react';
import Pfp from './pfp.jpg';
import CatPic from './cat.jpg';
import { useState } from 'react';

const Card = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <div className={styles.flipCard} onClick={() => setIsFlipped(!isFlipped)}>
            <div className={`${styles.flipCardInner} ${isFlipped ? styles.flipped : ''}`}>
                <div className={styles.cardFront}>
                     <div className={styles.cardTop}>
                        <h3>STEFAN</h3>
                        <Sign />
                    </div>
                    <div className={styles.stars}>
                        <Star /><Star /><Star /><Star /><Star /><Star /><Star />
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={Pfp} alt='' />
                    </div>
                    <div className={styles.cardInfo}>
                        <p><strong>Languages:</strong> RO (Native), EN (Fluent), JP (Learning)</p>
                        <p><strong>Traits:</strong> Optimistic, Organized, Quick Learner</p>
                        <p><strong>Hobbies:</strong> Gaming, Anime, Traveling, Photography</p>
                        <p><strong>Interests:</strong> Piano, Home Lab, Non-fiction, Learning</p>
                        <div className={styles.stats}>
                            <p>ATK/CAFFEINE  DEF/STACK OVERFLOW</p>
                        </div>
                    </div>
                </div>

                <div className={styles.cardBack}>
                    <div className={styles.cardTop}>
                        <h3>Maya</h3>
                        <Cat />
                    </div>
                    <div className={styles.stars}>
                        <Star /><Star /><Star /><Star /><Star /><Star /><Star /><Star /><Star /><Star />
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={CatPic} alt='My Cat' />
                    </div>
                    <div className={styles.cardInfo}>
                        <p><strong>Role:</strong> Project Manager & Emotional Support</p>
                        <p><strong>Hobbies:</strong> Sleeping on keyboards, Judging code</p>
                        <p><strong>Current Occupation:</strong> Conquering the world</p>
                        <p><strong>Loves:</strong> Sleeping and headpats</p>
                        <div className={styles.stats}>
                            <p>ATK/9999  DEF/9999</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card;