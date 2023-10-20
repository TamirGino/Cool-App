import React, { useState, useContext } from "react";
import card from './card.css'
import styles from '../../styles/card.module.css'
import ReactCardFlip from "react-card-flip";
import qm from '../../assets/question-mark.png'
import dataContext, { DataProvider } from '../../DataProvider'


const Card = (props) => {
    const { id, card_index, isFlipped, flipBoth } = props;
    // const [flip, setFlip] = useState(isFlipped);

    // const {count, cardsId} = useContext(dataContext)
    // const [countValue, setCountValue] = count;
    // const [cardsIdValue, setCardsIdValue] = cardsId;


    // const handleClick = () => {
    //     console.log("INDEX", card_index);
    //     console.log("cardsIdValue", cardsIdValue)
    //     console.log("ID",id)
    //     setCountValue(countValue + 1)
    //     setFlip(!flip);
        
    //     if (countValue % 2 !== 0){ 
    //         cardsIdValue.second = id;
    //         if(!isEqual()){

    //             console.log(flip)
    //             props.updateIsFlipped(card_index);
    //             console.log(flip)
    //             setTimeout(() => setFlip(false),1000)
    //         }
    //     } else {
    //         cardsIdValue.first = id;
    //         isFlipped = true;
    //     }
    // }

    // const isEqual = () => {
    //     if (cardsIdValue.first === cardsIdValue.second){
    //         console.log("EQUAL")
    //         return true;
    //     } else {
    //         console.log("NOT EQUAL")
    //         return false;
    //     }
    // }

    // const flipBoth = (index1,index2) =>{

    // }

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