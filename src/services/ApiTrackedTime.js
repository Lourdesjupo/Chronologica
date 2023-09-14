export const getTrackedListTasks =  async ()=> {
  const response = await fetch(
    `${import.meta.env.CHRONOLOGICA_API}/api/tracktasklist`
  );
  const dataJson= await response.json()
  const result = dataJson.map((task) => {
  return {
    id: task.id,
    name: task.nameTask,
    color:task.color, 
    estimatedTime: task.estimatedTime
  };
});

  return result;
}


//  return new Promise((resolve) => {
//    resolve([
//      {
//        id: 1,
//        name: 'estudiar js',
//        estimatedTime: 5,
//        totalTime: 1,
//      },
//      {
//        id: 2,
//        name: 'estudiar React',
//        estimatedTime: 3,
//        totalTime: 1.5,
//      },
//      {
//        id: 3,
//        name: 'estudiar sass',
//        estimatedTime: 2,
//        totalTime: 2.5,
//      },
//      {
//        id: 4,
//        name: 'estudiar nextJS',
//        estimatedTime: 2,
//        totalTime: 0.5,
//      },
//      {
//        id: 5,
//        name: 'estudiar mySql',
//        estimatedTime: 4,
//        totalTime: 0.3,
//      },
//    ]);
//  });