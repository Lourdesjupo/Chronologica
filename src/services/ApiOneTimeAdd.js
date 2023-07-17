
function AddOneTask(data) {
return fetch('http://localhost:4500/api/addonetask', {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((result) => {
    console.log('API', result);
    return result;
  });


}

export default AddOneTask