function OneTimeChecked(id) {
  return fetch('http://localhost:4500/api/addonetaskchecked', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({id:id}),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log('API', result);
      return result;
    });
}

export default OneTimeChecked;


// async function OneTimeChecked () {
//   try  {
//     const response = await fetch ('http://localhost:4500/api/addonetaskchecked', {
//       method: 'POST',
//       headers: { 'content-type': 'application/json' },
//       body: JSON.stringify({id:id}),
//     })
//     const dataJson = await response.json()
//     return dataJson
//   } catch (error) {
//     console.error ('hubo un error en OneTimeChecked', error )
//   }
// }
