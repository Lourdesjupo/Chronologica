function addTrackTask (data) {
fetch(`${import.meta.env.CHRONOLOGICA_API}/api/addtracktask`, {
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

export default addTrackTask