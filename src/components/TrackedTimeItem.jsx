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

function TrackedTimeItem({ id, nameTask, color, estimatedTime, totalTime }) {
  const [record, setRecord] = useState('play');
  const [recordText, setRecordText] = useState('▶  Iniciar trabajo');

  //{id: start: , stop:  }
  const [timer, setTimer] = useState({

  });
  const [currentTask, setCurrentTask] = useState({});
  const [startTime, setStartTime] = useState('');
  const [diff, setDiff] = useState('')
  //const now = ;
  console.log('DIFFF', diff )

  // useEffect(()=>{
  //   if(diff)
  // },[])



  const handleRecord = (id) => {
    if (record === 'play') {
      setRecord('stop');
      //Envío el id y que se ha clickado start
      addTimeTrack({ clicked: 'start', idTimeTrack: id });
      //const now = new Date().getTime()
      // setInitialTime({id, startTime:now})
      //Me traigo todas las tareas y las seteo en allTasks
      allTracks(id).then((data) => {
        setCurrentTask(data);
        const date = new Date(data.startTime);
        const miliseconds = date.getTime();
        setStartTime(miliseconds);
        setDiff(new Date(+new Date() - startTime))
        //const mili = miliseconds.getTime()
       // console.log('datitos', miliseconds);

        setTimer({hours:'00',minutes:'00',seconds:'00'})
      });

      return setRecordText('▢  Detener trabajo');
    } else {
      setRecord('play');
      addTimeTrack({ clicked: 'stop', idTimeTrack: id });
      allTracks().then((data) => {
        //setAllTasks(data);
      });
      // const now = new Date().getTime()
      //setInitialTime({id, startTime:now})
      return setRecordText('▶  Iniciar trabajo');
    }
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
              handleRecord(id);
            }}
          >
            {' '}
            {recordText}
          </Button>
          {/* <Button onClick={handleRecord} > ▶ Iniciar trabajo</Button>
            <Button sx={{}} > ▢ Detener trabajo</Button> */}
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#F6F4F8' }}>
          <Typography>
            Tiempo estimado finalización tarea: {estimatedTime}
          </Typography>
          <Typography>Tiempo restante: {estimatedTime - totalTime}</Typography>

          <Typography>Tiempo de trabajo: {totalTime}</Typography>
          <Stack alignItems='flex-end' justifyContent='center' spacing={5}>
            <Typography>{timer.hours}: {timer.minutes}:{timer.seconds}</Typography>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
export default TrackedTimeItem;
