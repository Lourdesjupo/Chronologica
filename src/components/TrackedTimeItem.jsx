/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Paper,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
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
  const timeDiff = now - startTime
  const sessionTimeSecs = Math.round((timeDiff < 0 ? 0 : timeDiff ) / 1000);
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
              mt: 1.5,
            }}
          >
            {nameTask}
          </Typography>
          <Box sx={{width:'170px'}}
            display="flex" 
            justifyContent="center">
          <Button 
            sx={{height:'50px'}}
            onClick={(ev) => {
              ev.stopPropagation()//previene que no haga bubling (click del acordeon desplegar)
              handleClick(ev);
            }}
          >            
            {!loading ? 
            (taskStatus === 'running'
              ? '▢ Detener trabajo'
              : '▶  Iniciar trabajo')
               : <Box sx={{width:'100%'}}><img src={spinner} alt="loading" /></Box> }
          </Button>
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={{ pl: 4.1 , backgroundColor: '#F6F4F8' }}>
          {estimatedTime !== 0 ? (
            <>
              <Typography sx={{ }}>
                Tiempo estimado finalización tarea: {estimatedTime} minutos
              </Typography>
              <Typography>
                Tiempo restante: {Math.round(estimatedTime - elapsedTime)} minutos
              </Typography>
            </>
          ) : (
            <>
              <Typography>Tiempo invertido: {Math.round(elapsedTime)} minutos</Typography>
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
