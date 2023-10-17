import React, { useState } from 'react';
import { TextField } from '@mui/material';

const SearchBox = (props) => {


const onSearchChange = (event) => {
    const filteredRobots = props.robots.filter(robot =>{
        return robot.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    props.search_data(filteredRobots);
}

return(
    <div className='text-input'>
    <TextField
          onChange={onSearchChange}
          id="filled-search"
          label="Filter here"
          type="search"
          variant="filled"
        />
    </div>
)
}

export default SearchBox;