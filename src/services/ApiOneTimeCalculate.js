export const getOneTimeCalculate = async (id) => {
  const response = await fetch(`http://localhost:4500/api/getonetimecompletedata/${id}`);
  const dataJson = await response.json();
  
  console.log('esto es del APi', dataJson);
  return dataJson;
};

/* Return example: 
  {
    id: 5,
    name: 'data',
    iconName: 'EventRepeatIcon',
    createdAt: 2023-07-14T22:00:00.000Z,
    alertQty: null,
    alertUnits: null,
    id_OTC: 29,
    completedDate: 2023-07-17T15:59:18.000Z,
    fkOneTask: 5
  }
]
*/