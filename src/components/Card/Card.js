import React from "react";
import styles from '../../styles/card.module.css'
import ReactCardFlip from "react-card-flip";
import qm from '../../assets/question-mark.png'

const Card = (props) => {
    const { id, card_index, isFlipped } = props;
    return (
        <>
        <ReactCardFlip isFlipped={isFlipped}
            flipDirection="horizontal">
            <div className={styles.card} onClick={() => props.handleClick(card_index, id)}>
                    <img className={styles.img_front} alt='robots' src={qm} />
            </div>

            <div className={styles.card} >
                    <img alt='robots' src={`https://robohash.org/${id}?size=150x150`} />
            </div>
        </ReactCardFlip>
    </>
    );
}

export default Card;