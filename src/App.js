import React, { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/Card/CardList';
import SearchInput from './components/Search/SearchInput';
// import { robots } from './robots';
import { Typography } from '@mui/material';
import Scroll from './components/Scroll/Scroll';

function App() {
  
  const [robots, setRobots] = useState([]);
  const [filteredRobots, setFilteredRobots] = useState(robots);

  const pull_data = (data) => {
    setFilteredRobots(data)
  }


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const newData = await response.json();
      setRobots(newData);
      setFilteredRobots(newData);
    };
  
    fetchData();
  }, []);
  
    return (
      <>
      <Typography variant="h3" align='center' >
        Robots Filter
      </Typography>
      <br></br>
      <SearchInput robots={robots} search_data={pull_data} />
      <br></br>
      <Scroll>
          <CardList robots={filteredRobots}/>
      </Scroll>
      </>
    )};


export default App;
