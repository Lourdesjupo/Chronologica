import { Box, Button, Fab, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
/* eslint-disable react/prop-types */
import PetsIcon from "@mui/icons-material/Pets";
import YardIcon from "@mui/icons-material/Yard";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import MedicationIcon from "@mui/icons-material/Medication";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import SchoolIcon from "@mui/icons-material/School";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HeadphonesBatteryIcon from "@mui/icons-material/HeadphonesBattery";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ChecklistIcon from "@mui/icons-material/Checklist";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import { useState } from "react";

function AddTask_OneTime() {
  const [icons, setIcons] = useState([
    { id: "PetsIcon", state: true },
    { id: "YardIcon", state: true },
    { id: "AutoStoriesIcon", state: true },
    { id: "MedicationIcon", state: true },
    { id: "FreeBreakfastIcon", state: true },
    { id: "SelfImprovementIcon", state: true },
    { id: "SchoolIcon", state: true },
    { id: "EventRepeatIcon", state: true },
    { id: "LocalPhoneIcon", state: true },
    { id: "HeadphonesBatteryIcon", state: true },
    { id: "EditNoteIcon", state: true },
    { id: "ChecklistIcon", state: true },
    { id: "LocalDrinkIcon", state: true }
  ]);
  const [frecuency, setFrecuency] = useState('')
  const handleClick = (ev) => {
    const id = ev.currentTarget.id;
    const foundIndexIcon= icons.findIndex(item=>item.id === id); 
    icons[foundIndexIcon].state = !icons[foundIndexIcon].state; 
    console.log(icons);
    setIcons([...icons]);
  };

  const foundColor = (icon)=>{
    return  icons.find(item => item.id === icon.id).state === true ? 'primary' : 'default'; 
    
  }
  

  const rendersIcons=()=>{
    return icons.map((item, index)=>{
      return <Grid key={index} id={item.id}  item xs={0}>
            <Fab key={index} id={item.id} 
              onClick={handleClick} 
              color={ foundColor(item) }>
              { 
                item.id === 'PetsIcon'? <PetsIcon fontSize="large" /> : 
                item.id === 'LocalDrinkIcon'? <LocalDrinkIcon fontSize="large" /> : 
                item.id === 'ChecklistIcon'? <ChecklistIcon fontSize="large" /> :
                item.id === 'EditNoteIcon'? <EditNoteIcon fontSize="large" /> : 
                item.id === 'YardIcon'? <YardIcon fontSize="large" /> : 
                item.id === 'FitnessCenterIcon'? <FitnessCenterIcon fontSize="large" /> : 
                item.id === 'AutoStoriesIcon'? <AutoStoriesIcon fontSize="large" /> :
                item.id === 'MedicationIcon'? <MedicationIcon fontSize="large" /> : 
                item.id === 'FreeBreakfastIcon'? <FreeBreakfastIcon fontSize="large" /> :
                item.id === 'SelfImprovementIcon'? <SelfImprovementIcon fontSize="large" /> : 
                item.id === 'LocalAtmIcon'? <LocalAtmIcon fontSize="large" /> : 
                item.id === 'SchoolIcon'? <SchoolIcon fontSize="large" /> : 
                item.id === 'EventRepeatIcon'? <EventRepeatIcon fontSize="large" /> : 
                item.id === 'LocalPhoneIcon'? <LocalPhoneIcon fontSize="large" /> : 
                item.id === 'HeadphonesBatteryIcon'? <HeadphonesBatteryIcon fontSize="large" /> : 
                item.id === 'FreeBreakfastIcon'? <FreeBreakfastIcon fontSize="large" /> : ''
              }
            </Fab>
          </Grid>
    }); 
  }
  const handleFrecuency =(event)=>{return  setFrecuency(event.target.value)} 

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 4, width: "50ch" },
        }}
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Nombre de la Tarea"
          variant="outlined"
        />
      </Box>
      <Typography variant="body1"sx={{ mt:4,ml:4 }}>Selecciona un icono:</Typography>
      <Stack component="ul" sx={{ mr: 15 }}>
        <Grid
          container
          spacing={3}
          direction="row"
          flexWrap="wrap"
          sx={{ mx: 1, mt: 4 }}
          component="li"
        >
          {rendersIcons()}
   
        </Grid>
      </Stack>
      <Typography variant="body1"sx={{ mt:8,ml:4 }}>Selecciona la frecuencia en la que deseas recibir una alerta:</Typography>
      <TextField id="standard-basic" label="Standard" variant="standard" sx={{ m: 4, minWidth: 120 }}/>
      <FormControl variant="standard" sx={{ m: 4, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">Frecuencia</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={frecuency}
          onChange={handleFrecuency}
          label="Frecuencia"

        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'dias'}>Días</MenuItem>
          <MenuItem value={'semanas'}>Semanas</MenuItem>
          <MenuItem value={'meses'}>Meses</MenuItem>
        </Select>
        </FormControl>
        <Stack  alignItems="flex-end"><Button variant="outlined"sx={{m:4}}>Añadir tarea</Button></Stack>
    </>
  );
}

export default AddTask_OneTime;
