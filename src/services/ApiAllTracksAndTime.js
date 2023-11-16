const allTracks = async (id)=>{
  const response = await fetch(
    `${import.meta.env.VITE_CHRONOLOGICA_API}/api/allTracks/${id}`
  );
  const dataJson = await response.json();

  // const start = dataJson[0].startTime

  // const time = start.split('T')
  // const hours = time[1].split('.')
  // const[horas, minutos, segundos] =  hours[0].split(':')

  const time = dataJson[0].startTime;

  console.log('tiempo', time);

  return {
    color: dataJson[0].color,
    nameTask: dataJson[0].nameTask,
    startTime: dataJson[0].startTime,
    stopTime: dataJson[0].stopTime,
    // horas,
    // minutos,
    // segundos
  };
}
export default allTracks 