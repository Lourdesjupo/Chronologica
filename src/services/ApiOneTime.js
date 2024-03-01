import CalculateTime from './CalculateTime';

export const getOneTimeListTasks = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_CHRONOLOGICA_API}/api/getonetimetasks`
  );
  const dataJson = await response.json();
  const result = dataJson.map((task) => {
    return {
      id: task.idoneTask,
      name: task.name,
      icon: task.iconName,
      create: task.createdAt,
      alertQty: task.alertQty,
      alertUnits: task.alertUnits,
      lastComplete: task.completedDate,
      status: CalculateTime({
        lastComplete: task.completedDate,
        alertQty: task.alertQty,
        alertUnits: task.alertUnits,
      }),
    };
  });
  console.log('esto es del APi', result);
  return result;
};

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
