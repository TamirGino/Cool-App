import React from 'react'

const dataContext = React.createContext()
export default dataContext

export const DataProvider = ({ children }) => {
  const [count, setCount] = React.useState(0)
  const [cardsId, setCardsId] = React.useState({first:0,second:0})

  const [robots, setRobots] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const newData = await response.json();
      setRobots(newData);
    //   setFilteredRobots(newData);
    };
  
    fetchData();
  }, []);


  return (
    <dataContext.Provider value={{ count: [count, setCount], cardsId : [cardsId, setCardsId], robots: [robots,setRobots] }}>
      {children}
    </dataContext.Provider>
  )
}
