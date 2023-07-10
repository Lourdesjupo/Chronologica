
export function getOneTimeListTasks() {
  return new Promise((resolve) => {
    resolve([
      {
        id: 1,
        name: 'regar',
        icon: 'YardIcon',
      },
      {
        id: 2,
        name: 'pastillas',
        icon: 'MedicationIcon',
      },
      {
        id: 3,
        name: 'agua',
        icon: 'LocalDrinkIcon',
      },
      {
        id: 4,
        name: 'regar',
        icon: 'YardIcon',
      },
      {
        id: 5,
        name: 'pastillas',
        icon: 'MedicationIcon',
      },
      {
        id: 6,
        name: 'agua',
        icon: 'LocalDrinkIcon',
      },
    ]);
  });
}
