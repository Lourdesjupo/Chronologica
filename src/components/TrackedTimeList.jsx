
import { useEffect, useState } from "react";
import { getTrackedListTasks } from "../services/ApiTrackedTime";
import TrackedTimeItem from "./TrackedTimeItem";
import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
function TrackedTimeList(){

  const [listTasks,setListTasks] = useState([])

  useEffect (()=>{
    getTrackedListTasks().then((trackedListTask)=>{
        setListTasks(trackedListTask)
    })

  },[])

    return (
    <>
      
        {listTasks.map((task)=>{
          return (
            
          <TrackedTimeItem
            key={task.id}
            id={task.id}
            nameTask={task.name}
            estimatedTime={task.estimatedTime}
            totalTime={task.totalTime}
            />
          )
        })}
     <Stack alignItems='center' sx={{ mt: 10 }}>
        <Button variant='contained'>
         <Link to='/addtrackedtask'>Añadir Tarea</Link> 
        </Button>
      </Stack>
    </>
    )
}

export default TrackedTimeList