import React from "react";
import { Button, Typography } from '@mui/material';
import styles from '../../styles/header.module.css'
import dataContext from '../../DataProvider'

const Header = (props) => {

 const { count } = React.useContext(dataContext);
 const [countValue, setCountValue] = count;

 const handleClick = () => {
        props.triggerRestart();
    };

    return (
        <>
        <div className={styles.container}>
            <div>
                <Typography variant="h6" align='center' fontFamily={"Tilt Neon"}  >
                    Movements: <Typography variant="h4" align='center' fontFamily={"Tilt Neon"}  >
                                    {countValue}
                               </Typography> 
                </Typography>
                <br></br>
                <Button variant="contained" onClick={handleClick} sx={{fontFamily:"Tilt Neon"}} >
                    Restart Game
                </Button>
            </div>
            <div className={styles.header}> 
                <Typography variant="h3" align='center' fontFamily={"Indie Flower"} >
                    How Good Is Your Memory ?
                </Typography>
            </div>
        </div>
        </>
    ) 
}

export default Header;