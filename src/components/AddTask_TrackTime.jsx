import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import { MuiColorInput } from 'mui-color-input'
import { useState } from "react"

function AddTask_TrackTime () {
 const [color, setColor] = useState('#ffffff')
  const [mins, setMins] =useState('')
  const [hours, setHours] =useState('')

  console.log(mins)
  const handleChangeColor = (value) => {
    setColor(value)
  }
  const handleHours = (ev) => {
    let hours =parseInt(ev.target.value)
     if(hours < 0){
      hours = 0
    }
    setHours(hours)
  }
  const handleMins = (ev) => {
    let minuts = parseInt(ev.target.value)
    if(minuts > 59) {
      minuts = 59
    } else if(minuts < 0){
      minuts= 0
    }
    setMins(minuts)
  }
  return <>
  <Box component="form" sx={{m:4}}>
        <TextField
          id="outlined-basic"
          label="Nombre de la Tarea"
          variant="outlined"
        />
        </Box>
        <Box sx={{m:4}}> 
          <Typography sx={{mb:3}}>Elige su color:</Typography>
          <MuiColorInput  value={color} onChange={handleChangeColor}/>
        </Box>
        <Box sx={{m:4}}>
          <Typography sx={{mb:3}}>Tiempo estimado en acabarla:</Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <TextField id="filled-basic" label="Horas" variant="filled" type="number" value={hours} onChange={handleHours} sx={{width:100}}/>
            <Typography>:</Typography>
            <TextField id="filled-basic" label="Minutos" variant="filled" type="number" value={mins}onChange={handleMins} sx={{width:100}}/>
          </Stack>
        </Box>
        <Stack  alignItems="flex-end"><Button variant="outlined"sx={{m:4}}>Añadir tarea</Button></Stack>

     
  </>
}

export default AddTask_TrackTime