import {
  Badge,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import {
  DateCalendar,
  LocalizationProvider,
  PickersDay,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from 'react';
import allOneTimeDate from '../services/ApiGetAllOneTimeDates';

function TaskDay(props) {
  const { dates: taskDays, day, month, showDays, ...other } = props;
  let isHighlighted = false;
  const today = day.toDate();




  //si tengo días y o bien tengo que mostrarlos o bien no tengo que mostrarlos pero el mes del día es igual al mes que se esta mostrando:
  if (taskDays && (showDays || (!showDays && today.getMonth() === month))) {
    isHighlighted = taskDays.some(
      (taskDay) =>
        taskDay.getDate() === today.getDate() &&
        taskDay.getMonth() === today.getMonth() &&
        taskDay.getFullYear() === today.getFullYear()
    );
  }

  // if(taskDays && today.getMonth()=== month) {
  //   isHighlighted = taskDays.some((taskDay)=> taskDay.getDate() === today.getDate() && taskDay.getMonth() === today.getMonth() && taskDay.getFullYear() === today.getFullYear() )
  // }

  return (
    <Badge
      key={props.day.toString()}
      overlap='circular'
      badgeContent={isHighlighted ? '🟢' : null}
    >
      <PickersDay {...props} day={day} />
    </Badge>
  );
}

function OneTimeReport() {
  const [selectedTask, setSelectedTask] = useState('');
  const [recurrentTasks, setRecurrentsTasks] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [showDays, setShowDays] = useState(true);
  console.log(showDays);

  const handleButton = () => {
    setShowDays(!showDays);
    console.log(showDays);
  };

  const handleMonthChange = (month) => {
    console.log('mes del cale', month);
    setSelectedMonth(month.toDate().getMonth());
  };

  console.log('recurrent', recurrentTasks);
  useEffect(() => {
    allOneTimeDate().then((recurrentTasks) => {
      setRecurrentsTasks([...recurrentTasks.values()]);
    });
  }, []);
  const selectTaskDates = selectedTask
    ? recurrentTasks[selectedTask].date
    : undefined;
  //String: Guarda en selected Task la posición del objeto seleccionado en recurrent task
  const handleChange = (ev) => {
    setSelectedTask(ev.target.value);
  };
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FormControl sx={{ width: '400px', mb: '20px' }}>
          <InputLabel id='Tasks'>Indica una tarea</InputLabel>
          <Select
            labelId='Tasks'
            label='Indica una tarea'
            onChange={handleChange}
            value={selectedTask}
          >
            {recurrentTasks.map((el, index) => (
              <MenuItem key={index} value={`${index}`}>
                {el.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          showDaysOutsideCurrentMonth={showDays}
          onMonthChange={handleMonthChange}
          //Pasar al slot el array de días según el valor de selectTask
          slots={{ day: TaskDay }}
          slotProps={{
            day: {
              dates: selectTaskDates,
              month: selectedMonth,
              showDays: showDays,
            },
          }}
        />
      </LocalizationProvider>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      <Button variant='contained' onClick={handleButton}>
        Cambiar Vista
      </Button>
      </Box>
    </>
  );
}

export default OneTimeReport;
