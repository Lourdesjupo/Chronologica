function addTimeTrack (param) {
  fetch(`${import.meta.env.CHRONOLOGICA_API}/api/addTimeTrack`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(param),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log('API', result);
      return result;
    });
}


export default addTimeTrack