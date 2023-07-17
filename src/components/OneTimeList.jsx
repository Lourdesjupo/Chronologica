import { useEffect, useState } from 'react';
import { getOneTimeListTasks } from '../services/ApiOneTime';
import { Button, Stack, Typography } from '@mui/material';
import OneTimeItem from './OneTimeItem';
import { Link } from 'react-router-dom';
import OneTimeChecked from '../services/ApiOneTimeChecked';


function OneTimeList() {
  const [oneTimeList, setOneTimeList] = useState([]);

  useEffect(() => {
    getOneTimeListTasks().then((oneTimeList) => {
      setOneTimeList(oneTimeList);

      console.log('oneTimeList', oneTimeList);
    });
  }, []);

  const handleClickAddTask = (ev) => {
    console.log(ev.target);
  };

  const getTaskStatus = (status) => {
    if (status === false) {
      return 'error';
    } else if (status === true) {
      return 'success';
    } else if (status === null) {
      return 'outline';
    }
  };

  const handleClickIcon = (id) => {
    OneTimeChecked(id).then(() => {
      getOneTimeListTasks().then((oneTimeList) => {
        setOneTimeList(oneTimeList);

        console.log('oneTimeList', oneTimeList);
      });
    });
  };

  console.log(oneTimeList);
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
              onClickIcon={() => {
                handleClickIcon(oneTime.id);
              }}
              taskStatus={getTaskStatus(oneTime.status)}
            />
          );
        })}
      </Stack>
      <Stack alignItems='center' sx={{ mt: 10 }}>
        <Button variant='contained' onClick={handleClickAddTask}>
          <Link style={{ textDecorationLine: 'none' }} to='/addonetimetask'>
            <Typography sx={{ color: 'white' }}> Añadir Tarea</Typography>
          </Link>
        </Button>
      </Stack>
    </>
  );
}

export default OneTimeList;
