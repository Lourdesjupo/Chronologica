


function addTimeTrack (command, id) {
  console.log( command, id );
  fetch(`${import.meta.env.VITE_CHRONOLOGICA_API}/api/addTimeTrack`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(command, id ),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log('API', result);
      return result;
    });
}


export default addTimeTrack