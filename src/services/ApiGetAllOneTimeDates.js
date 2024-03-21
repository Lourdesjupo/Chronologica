
//Recibe string: task (la tarea seleccionada )
async function allOneTimeDate () {
  const response = await fetch(
    `${import.meta.env.VITE_CHRONOLOGICA_API}/api/allOneTimesAndTasks`
  );
  if(!response.ok) {
    throw new Error ('network response was not ok')
  }
  const data = await response.json()
  console.log(data)
  const task = new Map()
     data.map((el) => {
      if(task.has(el.name)){
        const dates = task.get(el.name);
        dates.date.push(new Date(el.completedDate));
        //task.set(el.name, dates);
      }else{
        task.set(el.name,{name:el.name, date: [new Date(el.completedDate)]})
      }
    })
   
  console.log('console',task);
  //necesito un array con las tareas tasks =  ['pets','regar','comprar'...]
  // y un array de objetos:
  // ["Cactus": {
    //   key: pets,
    //   value: ['2024-01-02',' 2024-01-03']
    //   },
    //  
    // }]

  return task

}
export default allOneTimeDate