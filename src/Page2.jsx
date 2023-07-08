import './Page2.scss'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import WifiIcon from '@mui/icons-material/Wifi';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import { useState } from 'react';

function Page2() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTabIdx(newValue);
  };

  const handleClick = (ev) => {
    console.log(ev)
  }

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Typography variant="h1" component="p"><WifiIcon color='primary'/>Page2</Typography>
        <Button color="secondary" variant="outlined" onClick={handleClick}>Hello World</Button>
      </Stack>


      <Stack
        direction="column"
        alignItems="center"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box width="100%">
          <Tabs value={activeTabIdx} onChange={handleChange}>
              <Tab label="OneTime" />
              <Tab label="TrackedTime" />
          </Tabs>
          {activeTabIdx === 0 && (<Comp1/>)}
          {activeTabIdx === 1 && (<Comp2/>)}
        </Box>
      </Stack>
    </>
)
}

export default Page2
