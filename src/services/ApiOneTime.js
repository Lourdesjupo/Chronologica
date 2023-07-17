
export const getOneTimeListTasks= async ()=> {
  const response = await fetch('http://localhost:4500/api/getonetimetasks')
  const dataJson= await response.json()
  const result = dataJson.map((task) => {
     return {
      id: task.id,
      name: task.name,
      icon: task.iconName,
      create: task.createdAt,
      alertQty: task.alertQty,
      alertUnits: task.alertUnits
    }

  })
  console.log('esto es del APi', dataJson);
  return result;
}

// return new Promise((resolve) => {
//   resolve([
//     {
//       id: 1,
//       name: 'regar',
//       icon: 'YardIcon',
//     },
//     {
//       id: 2,
//       name: 'pastillas',
//       icon: 'MedicationIcon',
//     },
//     {
//       id: 3,
//       name: 'agua',
//       icon: 'LocalDrinkIcon',
//     },
//     {
//       id: 4,
//       name: 'regar',
//       icon: 'YardIcon',
//     },
//     {
//       id: 5,
//       name: 'pastillas',
//       icon: 'MedicationIcon',
//     },
//     {
//       id: 6,
//       name: 'agua',
//       icon: 'LocalDrinkIcon',
//     },
//   ]);
// });