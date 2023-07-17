/* eslint-disable react/prop-types */
import {  Accordion, AccordionDetails, AccordionSummary, Button, Paper, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
function TrackedTimeItem ({id, nameTask, color, estimatedTime, totalTime }) {
  
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
  
            <Button sx={{}} > ▶ Iniciar trabajo</Button>

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
