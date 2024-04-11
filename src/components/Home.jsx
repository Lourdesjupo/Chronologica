import { Box, Tab, Tabs } from '@mui/material';
import OneTimeList from './OneTimeList';
import TrackedTimeList from './TrackedTimeList';
import TodoList from './TodoList';
import { useState } from 'react';
//import { Link } from 'react-router-dom';

function Home() {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 

  return (<>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ mb:5, borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
        >
          
          <Tab label='Recurrentes✔️' />
          <Tab label='Todo📍'/>
          <Tab label='Chronometradas⌚'  />
        </Tabs>
      </Box>
      {value === 1 ?<TodoList/> : value === 0 ? <OneTimeList/> : <TrackedTimeList/>}
    </Box>
  {/* <Link style={{ textDecorationLine: 'none' }} to='/Example'>
   
      {<><h1>To example</h1></>}
    
     </Link> */}
</>
  );
}

export default Home;
