import React, { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/Card/CardList';
import SearchInput from './components/Search/SearchInput';
// import { robots } from './robots';
import { Typography } from '@mui/material';
import Scroll from './components/Scroll/Scroll';
import Header from './components/Header/Header';
import { DataProvider } from './DataProvider';

function App() {
  
  const [robots, setRobots] = useState([]);
  const [callRestart, setCallRestart] = useState(false);
  
  const triggerRestart = () => {
    setCallRestart(true);

    setTimeout(() => {
      resetStateBackToFalse();
    }, 2000);
  };

  const resetStateBackToFalse = () => {
    setCallRestart(false);
  };
 

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const newData = await response.json();
      const doubleArray = [...newData,...newData];
      setRobots(doubleArray);
    };
  
    fetchData();
  }, []);

    return (
      <div className='main'>
        <DataProvider>
          <Header triggerRestart={triggerRestart} />
        
       {/* <Typography variant="h3" align='center' >
        How Good Is Your Memory ?
      </Typography>
      <br></br>
      <SearchInput robots={robots} search_data={pull_data} />
      <br></br> */}
      
       {/* <Scroll> */}
           <CardList robots={robots} callRestart={callRestart} />
       {/* </Scroll>  */}
       </DataProvider>
      </div>
    );
}



export default App;
