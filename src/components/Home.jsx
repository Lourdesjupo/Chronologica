import { Box, Tab, Tabs } from '@mui/material';
import OneTimeList from './OneTimeList';
import TrackedTimeList from './TrackedTimeList';
import { useState } from 'react';

function Home() {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ mb:5, borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab label='One Time Tasks' />
          <Tab label='Tracked Time Tasks' />
        </Tabs>
      </Box>
      {value === 0 ? <OneTimeList/> : <TrackedTimeList/>}

    </Box>
  );
}

export default Home;
