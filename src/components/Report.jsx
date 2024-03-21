import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import TrackedTimeReport from './TrackedTimeReport';
import OneTimeReport from './OneTimeReport';

function Report() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ mb: 5, borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label='Estadísticas Tareas recurrentes ✔️' />
            <Tab label='Estadísticas Tareas cronometradas ⌚' />
          </Tabs>
        </Box>
        {value === 0 ? <OneTimeReport /> : <TrackedTimeReport />}
      </Box>
    </>
  );
}

export default Report;
