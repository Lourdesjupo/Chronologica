/* eslint-disable no-unused-vars */
import { Fab, Stack, Typography } from '@mui/material';
import TaskIcon from './TaskIcon';

// eslint-disable-next-line react/prop-types
function OneTimeItem({ name, icon, id }) {
  return (
    <>
      <Stack alignItems='center'
      justifyContent='center'
      component='li'
      sx={{m:2}}>
        <Fab color='secondary'>
          <TaskIcon icon={icon} />
        </Fab>
        <Typography color="#00000099" sx={{ mt: 2 }}>{name}</Typography>
      </Stack>
    </>
  );
}

export default OneTimeItem;
