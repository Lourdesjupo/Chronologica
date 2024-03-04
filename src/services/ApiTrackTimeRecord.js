
//Añadir Stop / Start a una tarea 

async function addTimeTrack(id, action) {
  await fetch(`${import.meta.env.VITE_CHRONOLOGICA_API}/api/addTimeTrack`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ id, action}),
  })
}


export default addTimeTrack