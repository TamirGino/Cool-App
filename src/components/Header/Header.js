import React from "react";
import { Button, Typography } from '@mui/material';
import styles from '../../styles/header.module.css'
import dataContext, { DataProvider } from '../../DataProvider'



const Header = (props) => {

    // const [count, setData] = React.useContext(dataContext)

 const { count, cardsId } = React.useContext(dataContext);
 const [countValue, setCountValue] = count;
 const [cardsIdValue, setCardsIdValue] = cardsId;

 const handleClick = () => {
        props.triggerRestart();
    };

    return (
        <>
        <div className={styles.container}>
            <div className={styles.movements}>
                <Typography variant="h6" align='center' >
                    Movements: {countValue}
                </Typography>
                <br></br>
                <Button variant="contained" onClick={handleClick}>
                    Restart Game
                </Button>
            </div>
            
            <div className={styles.header}>
                <Typography variant="h3" align='center' >
                    How Good Is Your Memory ?
                </Typography>
            </div>

            

        </div>
        </>
        
    ) 
}

export default Header;