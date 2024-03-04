
import { useEffect, useState } from "react";
import { getTrackedListTasks } from "../services/ApiTrackedTime";
import TrackedTimeItem from "./TrackedTimeItem";
import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import addTimeTrack from "../services/ApiTrackTimeRecord";


function TrackedTimeList(){
//listTask = {color: rgb..., estimatedTime: int, id, name: string}

  const [listTasks,setListTasks] = useState([])

  async function handleTaskStatusAction (id, action) {
    console.log(1)
    await addTimeTrack(id, action)
    console.log(2)
    console.log('addTimeTrack:', id,action)
    await loadTasks ()
  }

  async function loadTasks() {
    const trackedListTask = await getTrackedListTasks()
    // @TODO: PONER VALIDACIONES DEL TRACKED LIST EJ;
    //que los tipos sean correctos y que existan los datos (campos no vacios) 
    setListTasks(trackedListTask)
  }

  
  useEffect (()=>{
    loadTasks ()
  },[])

    return (
    <>
      
        {listTasks.map((task)=>{
          return (
            
          <TrackedTimeItem
            key={task.id}
            id={task.id}
            nameTask={task.name}
            color={task.color}
            estimatedTime={task.estimatedTime}
            elapsedTime={task.elapsedTime}
            startTime={task.startTime}
            stopTime={task.stopTime}
            onTaskStatusAction={handleTaskStatusAction}
            />
          )
        })}
     <Stack alignItems='center' sx={{ mt: 10 }}>
        <Button variant='contained'>
         <Link style={{textDecorationLine: "none"}} to='/addtrackedtask'>
          <Typography sx={{color:'white'}}>Añadir Tarea</Typography>
         </Link> 
        </Button>
      </Stack>
    </>
    )
}

export default TrackedTimeList