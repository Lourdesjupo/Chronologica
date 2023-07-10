import { useEffect, useState } from 'react';
import { getOneTimeListTasks } from '../services/ApiOneTime';
import { Button, Stack } from '@mui/material';
import OneTimeItem from './OneTimeItem';
import { Link } from 'react-router-dom';

function OneTimeList() {
  const [oneTimeList, setOneTimeList] = useState([]);

  useEffect(() => {
    getOneTimeListTasks().then((oneTimeList) => {
      setOneTimeList(oneTimeList);
    });
  }, []);
  const handleClickAddTask = (ev) => {
    console.log(ev.target);
  };
  return (
    <>
      <Stack
        component='ul'
        direction='row'
        justifyContent='space-evenly'
        flexWrap='wrap'
        sx={{ mx: 7 }}
      >
        {oneTimeList.map((oneTime) => {
          return (
            <OneTimeItem
              key={oneTime.id}
              id={oneTime.id}
              name={oneTime.name}
              icon={oneTime.icon}
            />
          );
        })}
      </Stack>
      <Stack alignItems='center' sx={{ mt: 10 }}>
        <Button variant='contained' onClick={handleClickAddTask}>
          <Link to='/addonetimetask'>Añadir Tarea</Link>
        </Button>
      </Stack>
    </>
  );
}

export default OneTimeList;
