/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
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
import spinner from '../assets/Spinner-1s-40px.svg'

function TrackedTimeItem({
  id,
  nameTask,
  color,
  estimatedTime,
  elapsedTime,
  startTime,
  stopTime,
  onTaskStatusAction,
}) {
  const taskStatus = startTime && !stopTime ? 'running' : 'stopped';
  const [loading, setLoading] = useState(false);
  const [now, setNow] = useState(new Date());
  const sessionTimeSecs = Math.round((now - startTime) / 1000);
  const totalMinutes = Math.floor(sessionTimeSecs / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const secs = sessionTimeSecs % 60;
  const timer = `${hours < 10 ? '0' : ''}${hours} : ${
    minutes < 10 ? '0' : ''
  }${minutes} : ${secs < 10 ? '0' : ''}${secs}`;

  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
    }, 1000);
  }, []);

  const handleClick = async (ev) => {
    ev.preventDefault()
    setLoading(true);
    await onTaskStatusAction(id, taskStatus === 'running' ? 'stop' : 'start');
    setLoading(false);
  };

  return (
    <>
      <Accordion>
        <AccordionSummary  expandIcon={<ExpandMoreIcon />} id={id}>
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
            onClick={(ev) => {
              ev.preventDefault()
              handleClick(ev);
            }}
          >            
            {!loading ? 
            (taskStatus === 'running'
              ? '▢ Detener trabajo'
              : '▶  Iniciar trabajo')
               : <Box display="flex" justifyContent="end" alignItems="end"><img src={spinner} alt="loading" /></Box> }
          </Button>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#F6F4F8' }}>
          {estimatedTime !== 0 ? (
            <>
              <Typography>
                Tiempo estimado finalización tarea: {estimatedTime}
              </Typography>
              <Typography>
                Tiempo restante: {Math.round(estimatedTime - elapsedTime)}
              </Typography>
            </>
          ) : (
            <>
              <Typography>Tiempo invertido: {Math.round(elapsedTime)}</Typography>
            </>
          )}
          {taskStatus === 'running' && (
            <Typography>Tiempo de trabajo: {timer}</Typography>
          )}
        </AccordionDetails>
      </Accordion>
    </>
  );
}
export default TrackedTimeItem;
