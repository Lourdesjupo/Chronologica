/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import addTimeTrack from '../services/ApiTrackTimeRecord';
import allTracks from '../services/ApiAllTracksAndTime';
import { useEffect } from 'react';

function TrackedTimeItem({ id, nameTask, color, estimatedTime, elapsedTime, startTime }) {
  const [taskStatus, setTaskStatus] = useState(startTime ? 'running':'stopped');
//  console.log('tipo de startTime',typeof startTime, 'startTime:', startTime)
  const [now, setNow] = useState (new Date())
  const sessionTimeSecs = Math.round((now - startTime)/1000) 
  const totalMinutes = Math.floor(sessionTimeSecs /  60)
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  const secs =  sessionTimeSecs % 60
  const timer = `${hours < 10 ? '0' : ''}${hours} : ${minutes < 10 ? '0' : ''}${minutes} : ${secs < 10 ? '0' : ''}${secs}`

  useEffect(()=>{
    setInterval(()=>{
      setNow(new Date())
    },60000)
  },[])

  const handleClick = (id) => {

  };

  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id={id}>
          <Paper
            variant='outlined'
            sx={{ width: 10, backgroundColor: color }}
          />
          <Typography
            sx={{
              fontWeight: 'bold',
              width: '33%',
              flexShrink: 0,
              ml: 1,
              mt: 0.5,
            }}
          >
            {nameTask}
          </Typography>

          <Button
            onClick={() => {
              handleClick();
            }}
          >
            {' '}
            {taskStatus === 'running' ? '▢ Detener trabajo': '▶  Iniciar trabajo'}
          </Button>
          {/* <Button onClick={handleRecord} > ▶ Iniciar trabajo</Button>
            <Button sx={{}} > ▢ Detener trabajo</Button> */}
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#F6F4F8' }}>
          {estimatedTime !== 0 && 
          (<>
            <Typography>Tiempo estimado finalización tarea: {estimatedTime}</Typography>
            <Typography>Tiempo restante: {estimatedTime - elapsedTime}</Typography>

          </>)
          }
          {taskStatus === 'running' && (<Typography>Tiempo de trabajo: {timer}</Typography>) }
          {/* <Stack alignItems='flex-end' justifyContent='center' spacing={5}>
            <Typography>{timer.hours}: {timer.minutes}:{timer.seconds}</Typography>
          </Stack> */}
        </AccordionDetails>
      </Accordion>
    </>
  );
}
export default TrackedTimeItem;
