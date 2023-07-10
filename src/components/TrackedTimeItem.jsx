/* eslint-disable react/prop-types */
import {  Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
function TrackedTimeItem ({id, nameTask, estimatedTime, totalTime }) {
  
    return(
      <>
      <Accordion
      >
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id={id}
        >
          <Typography>{nameTask}</Typography>
        </AccordionSummary>
      
      <AccordionDetails
       >
          <Typography>
            Minutos para finalizar la tarea: {estimatedTime}
            Tiempo total: {totalTime}
          </Typography>
        </AccordionDetails>
         </Accordion>
      </>
    )
 
}
export default TrackedTimeItem
