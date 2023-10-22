import React, { useEffect, useState, useContext } from "react";
import Card from './Card';
import styles from '../../styles/cardlist.module.css'
import dataContext from '../../DataProvider'
import { Alert, Snackbar } from '@mui/material';

const CardList = (props) => {
  const {count} = useContext(dataContext)
  const [countValue, setCountValue] = count;

  const [openSnack, setOpenSnack] = useState(false);
  const [initialData, setInitialData] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);

  const handleCloseAlert = () => {
    setOpenSnack(false);
  };

  const handleAlert = () => {
    setOpenSnack(true)
  };

  const handleCardClick = (index, id) => {
    setCountValue(countValue + 1)
    if (flippedCards.length < 2) {
      flipCardAtIndex(index, true);
      setFlippedCards([...flippedCards, { index, id }])
    }   
  }

  useEffect(() => {
    const shuffledRobots = [...props.robots];
    shuffleArray(shuffledRobots);
    const updatedData = shuffledRobots.map((item) => ({
      ...item,
      isFlipped: false,
    }));
    setInitialData(updatedData);
  }, [props.robots]);
  

  useEffect(() => {
    if (props.callRestart) {
      restartGame();
    }
  }, [props.callRestart]);

    
  useEffect(() => {
    const isFlipBoth = () =>{
      if (flippedCards.length === 2) {
        const [card1, card2] = flippedCards;
        if (card1.id === card2.id && card1.index !== card2.index) {
          // Matched cards
          if(isGameDone()){
            handleAlert();
            setTimeout(() => {
              restartGame();
          } , 1500);
          }
        } else {
          // Not a match, flip the cards back
          setTimeout(() => {
            flipCardAtIndex(card1.index, false, card2.index );
          }, 1000); 
        }
        setFlippedCards([]);
      }
    }
    isFlipBoth()    
  }, [flippedCards])

  const isGameDone = () =>{
    let countCards = 0;
    initialData.map((card, index) => {
      if(card.isFlipped === false){
        countCards = countCards + 1;
      } 
  })
    if(countCards > 0){
      return false;
    } else {
      return true;
    }
  }
  

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const updateIsFlipped = (index, isFlipped) => {
    const new_arr = initialData.map((item, i) => {
      if (i === index) {
        return { ...item, isFlipped };
      }
      return item;
    });
    setInitialData(new_arr);
  };

  const  flipCardAtIndex = (index, flipBool, secondIndex = null) => {
    if (index < 0 || index >= initialData.length) {
      return;
    }

    const newData = [...initialData];
    newData[index] = { ...newData[index], isFlipped: flipBool };

    if (secondIndex !== null && secondIndex >= 0 && secondIndex < initialData.length) {
      newData[secondIndex] = { ...newData[secondIndex], isFlipped: flipBool };
    }

    setInitialData(newData);
  }

  const restartGame = () => {
  const shuffledRobots = [...props.robots];
    shuffleArray(shuffledRobots);
    const updatedData = shuffledRobots.map((item) => ({
      ...item,
      isFlipped: false,
    }));
    setInitialData(updatedData);
    setCountValue(0);
    setFlippedCards([]);
  }
  
  
  return (
    <>
    <div className={styles.flex_gap}>
      {initialData.map((card, index) => (
        <div key={index}>
          <Card
            key={card.id}
            card_index={index}
            id={card.id}
            isFlipped={card.isFlipped}
            updateIsFlipped={updateIsFlipped}
            handleClick={() => handleCardClick(index, card.id)}
          />
        </div>
      ))}
    </div>

      <Snackbar open={openSnack} autoHideDuration={3000} onClose={handleCloseAlert} >
      <Alert variant="filled" severity="success">
        Congratulations ! You Made It ! 
      </Alert>
    </Snackbar>
    </>
  );
}

export default CardList;
