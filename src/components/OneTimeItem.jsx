/* eslint-disable no-unused-vars */
import { Badge, Fab, Stack, Typography } from '@mui/material';
import TaskIcon from './TaskIcon';
import { useState } from 'react';
import { red } from '@mui/material/colors';

// eslint-disable-next-line react/prop-types
function OneTimeItem({ name, icon, id, taskStatus,onClickIcon }) {

  return (
    <>
      <Stack alignItems='center'
      justifyContent='center'
      component='li'
      sx={{m:2}}>
      <Badge  color={taskStatus} sx={{zIndex: 1051}} badgeContent=" " overlap="circular" variant="dot">
       <Fab color='secondary'onClick={onClickIcon} >
          <TaskIcon icon={icon}/>
        </Fab>
        </Badge>
        <Typography color="#00000099" sx={{ mt: 2 }}>{name}</Typography>
      </Stack>
    </>
  );
}

export default OneTimeItem;
