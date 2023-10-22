import React, { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/Card/CardList';
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
           <CardList robots={robots} callRestart={callRestart} />
       </DataProvider>
      </div>
    );
}



export default App;
