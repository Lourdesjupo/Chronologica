/* eslint-disable react/prop-types */
import {  Accordion, AccordionDetails, AccordionSummary, Button, Paper, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from "react";
// import Timer from 'react-timer-wrapper';
// import Timecode from 'react-timecode'



function TrackedTimeItem ({id, nameTask, color, estimatedTime, totalTime }) {
  const [record,setRecord] =useState('play')
  const [recordText, setRecordText] =useState('▶  Iniciar trabajo')
  


  const handleRecord= ()=>{
    if(record === 'play') {
       setRecord('stop') 
     return setRecordText( '▢  Detener trabajo')
    } else { 
       setRecord('play') 
      return setRecordText( '▶  Iniciar trabajo')
    }
   
  }


    return(
      <>
      <Accordion
      >
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id={id}
     
        >
          <Paper variant="outlined"sx={{width:10, backgroundColor: color}} />
            <Typography sx={{fontWeight:'bold', width: '33%', flexShrink: 0, ml:1, mt:0.5 }}>
              {nameTask}
            </Typography>
  
            <Button onClick={handleRecord} > {recordText}</Button>
            {/* <Button onClick={handleRecord} > ▶ Iniciar trabajo</Button>
            <Button sx={{}} > ▢ Detener trabajo</Button> */}

        </AccordionSummary>
       <AccordionDetails 
          sx={{backgroundColor:'#F6F4F8'}}
       >
          <Typography >
            Tiempo estimado finalización tarea: {estimatedTime}
            
          </Typography>
          <Typography>
            Tiempo restante: {estimatedTime - totalTime}
          </Typography>

          <Typography>
            Tiempo de trabajo: {totalTime}
          </Typography>
        </AccordionDetails>
         </Accordion>
      </>
    )
 
}
export default TrackedTimeItem
