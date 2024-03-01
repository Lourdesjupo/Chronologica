// const response = [
//   {
//     completedDate: '2023-06-17T17:00:00.000Z',
//     alertQty: '1',
//     alertUnits: 'month',
//   },
// ];

// CalculateTime(response[0]);

function CalculateTime(response) {
  //console.log('response', response)
  let lastClick = response.lastComplete;
  const quantity = response.alertQty;
  const unitys = response.alertUnits; /*day ,week, month */
  let daysForReminder;
  //console.log(quantity, unitys, lastClick)
  if (quantity === null || unitys === null) {
    return null;
  }

  if (unitys === 'month') {
    daysForReminder = parseInt(quantity) * 30;
  } else if (unitys === 'week') {
    daysForReminder = parseInt(quantity) * 7;
  } else {
    daysForReminder = quantity;
  }

  lastClick = new Date(response.lastComplete);
  //console.log('lastClick:', lastClick, 'and last complete: ', response.lastComplete)

  const result = sumarDias(lastClick, daysForReminder);

  const hoy = new Date();


  //console.log(`-${result.toDateString()}-${hoy.toDateString()}-`);


  if (result>= hoy) {
    console.log('ahora', true);
    return true;
  } else {
    return false;
  }

  // return {}

  //boolean true or false
}

function sumarDias(fecha, dias){
  fecha.setDate(fecha.getDate() + dias);
  return fecha;
}

export default CalculateTime;
