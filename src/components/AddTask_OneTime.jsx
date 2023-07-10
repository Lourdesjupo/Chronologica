import { Box, Fab, Grid, Stack, TextField } from '@mui/material';
/* eslint-disable react/prop-types */
import PetsIcon from '@mui/icons-material/Pets';
import YardIcon from '@mui/icons-material/Yard';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MedicationIcon from '@mui/icons-material/Medication';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import SchoolIcon from '@mui/icons-material/School';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HeadphonesBatteryIcon from '@mui/icons-material/HeadphonesBattery';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ChecklistIcon from '@mui/icons-material/Checklist';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import { useState } from 'react';

function AddTask_OneTime() {
  const [icon, setIcon] = useState([{id:'PetsIcon', state: true},{id:'PetsIcon', state: true},{id:'PetsIcon', state: true}])
  const handleClick =(ev)=>{
        const id = ev.currentTarget.id;
        const iconClicked = icon.find((icon)=>{
          return icon.id === id
        })
        iconClicked.state = !iconClicked.state
        setIcon([...icon])
    console.log(id)

 
      } 
  return (
    <>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 4, width: '50ch' },
        }}
        autoComplete='off'
      >
        <TextField
          id='outlined-basic'
          label='Nombre de la Tarea'
          variant='outlined'
        />
      </Box>
      <Stack component='ul' sx={{ mr: 15 }}>
        <Grid
          container
          spacing={3}
          direction='row'
          flexWrap='wrap'
          sx={{ mx: 1, mt: 4 }}
          component='li'
        >
          <Grid item xs={0}>
            <Fab id="PetIcon" onClick={handleClick} color={icon.id}>
              {<PetsIcon fontSize='large' />}
            </Fab>
          </Grid>
          <Grid item xs={0}>
            <Fab onClick={handleClick} color='secondary'>
              {<YardIcon fontSize='large' />}
            </Fab>
          </Grid>
          <Grid item xs={0}>
            <Fab onClick={handleClick} color='secondary'>
              {<FitnessCenterIcon fontSize='large' />}
            </Fab>
          </Grid>
          <Grid item xs={0}>
            <Fab onClick={handleClick} color='secondary'>
              {<AutoStoriesIcon fontSize='large' />}
            </Fab>
          </Grid>
          <Grid item xs={0}>
            <Fab onClick={handleClick} color='secondary'>
              {<MedicationIcon fontSize='large' />}
            </Fab>
          </Grid>
          <Grid item xs={0}>
            <Fab onClick={handleClick} color='secondary'>
              {<FreeBreakfastIcon fontSize='large' />}
            </Fab>
          </Grid>
          <Grid item xs={0}>
            <Fab onClick={handleClick} color='secondary'>
              {<SelfImprovementIcon fontSize='large' />}
            </Fab>
          </Grid>
          <Grid item xs={0}>
            <Fab onClick={handleClick} color='secondary'>
              {<LocalAtmIcon fontSize='large' />}
            </Fab>
          </Grid>
          <Grid item xs={0}>
            <Fab onClick={handleClick} color='secondary'>
              {<SchoolIcon fontSize='large' />}
            </Fab>
          </Grid>
          <Grid item xs={0}>
            <Fab onClick={handleClick} color='secondary'>
              {<EventRepeatIcon fontSize='large' />}
            </Fab>
          </Grid>
          <Grid item xs={0}>
            <Fab onClick={handleClick} color='secondary'>
              {<LocalPhoneIcon fontSize='large' />}
            </Fab>
          </Grid>
          <Grid item xs={0}>
            <Fab onClick={handleClick} color='secondary'>
              {<HeadphonesBatteryIcon fontSize='large' />}
            </Fab>
          </Grid>
          <Grid item xs={0}>
            <Fab onClick={handleClick} color='secondary'>
              {<EditNoteIcon fontSize='large' />}
            </Fab>
          </Grid>
          <Grid item xs={0}>
            <Fab onClick={handleClick} color='secondary'>
              {<ChecklistIcon fontSize='large' />}
            </Fab>
          </Grid>
          <Grid item xs={0}>
            <Fab onClick={handleClick} color='secondary'>
              {<LocalDrinkIcon fontSize='large' />}
            </Fab>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}

export default AddTask_OneTime;
