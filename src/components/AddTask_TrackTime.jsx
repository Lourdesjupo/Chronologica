import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { MuiColorInput } from 'mui-color-input';
import { useState } from 'react';
import addTrackTask from '../services/ApiTrackTimeAdd';
import { Link } from 'react-router-dom';

function AddTask_TrackTime() {
  const [color, setColor] = useState('#ffffff');
  const [mins, setMins] = useState(0);
  const [hours, setHours] = useState(0);
  const [name, setName] = useState('');
  
  const hoursInMinutes = parseInt(hours)* 60
  const mins2 =parseInt(mins)
  const total = hoursInMinutes + mins2

  console.log('total', total)




  const handleName = (ev) => {
    setName(ev.target.value);
  };

  const handleChangeColor = (value) => {
    setColor(value);
  };
  const handleHours = (ev) => {
    let hours = parseInt(ev.target.value);
    if (hours < 0) {
      hours = 0;
    }
    setHours(hours);
  };
  const handleMins = (ev) => {
    let minuts = parseInt(ev.target.value);
    if (minuts > 59) {
      minuts = 59;
    } else if (minuts < 0) {
      minuts = 0;
    }
    setMins(minuts);
  };

  const data = {
    nameTask: name,
    color: color,
    estimatedTime: total,
  };

  // console.log(data, mins)
  const handleSubmit = () => {
    addTrackTask(data).then((response) => {
      return response;
    });
  };

  return (
    <>
      <Box component='form' sx={{ m: 4 }}>
        <TextField
          id='outlined-basic'
          label='Nombre de la Tarea'
          variant='outlined'
          value={name}
          onChange={handleName}
        />
      </Box>
      <Box sx={{ m: 4 }}>
        <Typography sx={{ mb: 3 }}>Elige su color:</Typography>
        <MuiColorInput value={color} onChange={handleChangeColor} />
      </Box>
      <Box sx={{ m: 4 }}>
        <Typography sx={{ mb: 3 }}>Tiempo estimado en acabarla:</Typography>
        <Stack direction='row' spacing={2} alignItems='center'>
          <TextField
            id='filled-basic'
            label='Horas'
            variant='filled'
            type='number'
            value={hours}
            onChange={handleHours}
            sx={{ width: 100 }}
          />
          <Typography>:</Typography>
          <TextField
            id='filled-basic'
            label='Minutos'
            variant='filled'
            type='number'
            value={mins}
            onChange={handleMins}
            sx={{ width: 100 }}
          />
        </Stack>
      </Box>
      <Stack alignItems='flex-end'>
        <Link to='/'>
        <Button variant='outlined' sx={{ m: 4 }} onClick={handleSubmit}>
          Añadir tarea
        </Button>
        </Link>
      </Stack>
    </>
  );
}

export default AddTask_TrackTime;
